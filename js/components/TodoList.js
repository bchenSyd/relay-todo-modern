// @flow
import MarkAllTodosMutation from '../mutations/MarkAllTodosMutation';

import Todo from './Todo';
import TodoWithComments from './TodoWithComments';
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
    const complete = e.target.checked;
    MarkAllTodosMutation.commit(
      this.props.relay.environment,
      complete,
      this.props.viewer.todos,
      this.props.viewer,
    );
  };
  renderTodos() {
    const { relay: { variables: { showTodoWithComments } } } = this.context;
    return this.props.viewer.todos.edges.map(edge => {
      return showTodoWithComments ? <TodoWithComments
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
    const { variables: { showTodoWithComments } } = relayContext;
    this.props.relay.refetch(preVars => ({
      ...preVars,
      showTodoWithComments: !showTodoWithComments,
    }));
  };


  _onRefetch = _ => {
    const { relay } = this.props;
    relay.refetch(preVars => preVars /*fetch vars*/, null /*?render vars*/, null/*?callback*/, { force: true }/*?RefetchOptions*/);
  };

  _onRefetchNewVars = _ => {
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
            <button onClick={this._onRefetchNewVars}>refetch-changeVars</button>
          </div>
        </div>
      </section>
    );
  }
}

export default createRefetchContainer(TodoList,
  graphql.experimental`
    fragment TodoList_viewer on User
        @argumentDefinitions( 
          showTodoWithComments:{
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
                        complete,
                        ...TodoWithComments_todo @include(if: $showTodoWithComments),
                        ...Todo_todo  @skip(if: $showTodoWithComments)
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
  graphql.experimental`
  query TodoListAnyNameRefetchQuery($showTodoWithComments: Boolean!, $_: Int!){
    viewer{
      user{
           ...TodoList_viewer @arguments(showTodoWithComments: $showTodoWithComments, _:$_) 
        }
      }
  }`
);
