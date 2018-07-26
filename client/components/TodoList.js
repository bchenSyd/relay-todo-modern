// @flow
import MarkAllTodosMutation from '../mutations/MarkAllTodosMutation';

import Todo from './Todo';
import TodoWithDetails from './TodoWithDetails';
import PropTypes from 'prop-types';

import React from 'react';
import {
  createRefetchContainer,
  graphql,
} from 'react-relay';

import todoSubscription from '../subscriptions/todo';


class TodoList extends React.Component {

  static contextTypes = {
    relay: PropTypes.shape({
      variables: PropTypes.object,
    }),
  }

  componentDidMount() {

    const { environment } = this.props.relay;
    todoSubscription.subscribeTodo(environment, {
      input: {
        arg: 'bchen',
        clientSubscriptionId: 'bchen-client-id',
      },
    });
  }


  _handleMarkAllChange = (e) => {
    const completed = e.target.checked;
    MarkAllTodosMutation.commit(
      this.props.relay.environment,
      completed,
      this.props.viewer.todos,
      this.props.viewer,
    );
  };
  renderTodos() {
    const { relay: { variables: { showTodoWithDetails } } } = this.context;
    return this.props.viewer.todos.edges.map(edge => {
      return showTodoWithDetails ? <TodoWithDetails
        key={edge.node.id}
        todo={edge.node}
        viewer={this.props.viewer}
      /> :
        <Todo
          key={edge.node.id}
          todo={edge.node}
          viewer={this.props.viewer}
        />;
    });
  }
  _onSwitchView = e => {
    const { relay: relayContext } = this.context;
    const { variables: { showTodoWithDetails } } = relayContext;
    this.props.relay.refetch(preVars => ({
      ...preVars,
      showTodoWithDetails: !showTodoWithDetails,
    }));
  };


  _onRefetch = _ => {
    const { relay } = this.props;
    relay.refetch(preVars => preVars /*fetch vars*/, null /*?render vars*/, null/*?callback*/, { force: true }/*?RefetchOptions*/);
  };

  _onRefetchWithNewParams = _ => {
    const { relay } = this.props;
    relay.refetch(preVars => ({
      ...preVars,
      _: Math.floor(Math.random() * 100),
    }));
  }
  render() {
    const numTodos = this.props.viewer.totalCount;
    const numCompletedTodos = this.props.viewer.completedCount;
    return (
      <section className="main">
        <input   type="checkbox"
          checked={numTodos === numCompletedTodos}
          className="toggle-all"
          onChange={this._handleMarkAllChange}
        />

        <ul className="todo-list">
          {this.renderTodos()}
        </ul>
        <div style={{ marginTop: '20px' }}>
          <div>
            <button onClick={this._onSwitchView}>refetch-changeview</button>
          </div>
          <div>
            <button onClick={this._onRefetch}>refech</button>
          </div>
          <div>
            <button onClick={this._onRefetchWithNewParams}>refetch with new Params</button>
          </div>
        </div>
      </section>
    );
  }
}

export default createRefetchContainer(TodoList,
  graphql`
    fragment TodoList_viewer on User
        @argumentDefinitions( 
          showTodoWithDetails:{
            type:"Boolean!",
            defaultValue:false
           },
           _:{
            type:"Int!",
            defaultValue:0
           }){
                  todos(
                    first: 2147483647  # max GraphQLInt
                  ) @connection(key: "TodoList_todos") {
                    edges {
                      node {
                        id,
                        completed,
                        ...TodoWithDetails_todo @include(if: $showTodoWithDetails),
                        ...Todo_todo  @skip(if: $showTodoWithDetails)
                      },
                    },
                  },
                  id,
                  totalCount,
                  completedCount,
                  echo(_:$_)
                  ...Todo_viewer,
        }
  `,
  graphql`
  query TodoListAnyNameRefetchQuery($showTodoWithDetails: Boolean!, $_: Int!){
    viewer{
      user{
           ...TodoList_viewer @arguments(showTodoWithDetails: $showTodoWithDetails, _:$_) 
        }
      }
  }`
);
