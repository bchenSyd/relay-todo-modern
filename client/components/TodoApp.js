// @flow

import AddTodoMutation from '../mutations/AddTodoMutation';
import TodoList from './TodoList';
import TodoListFooter from './TodoListFooter';
import TodoTextInput from './TodoTextInput';

import React from 'react';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';

class TodoApp extends React.Component {
  _handleTextInputSave = (text) => {
    AddTodoMutation.commit(
      this.props.relay.environment,
      text,
      this.props.viewer,
    );
  };
  render() {
    const hasTodos = this.props.viewer.totalCount > 0;
    return (
      <div>
        <div className="header">Relay Modern Demo</div>
        <section className="todoapp">
          <header >
            <TodoTextInput
              autoFocus={true}
              className="new-todo"
              onSave={this._handleTextInputSave}
              placeholder="create a new competitor"
            />
          </header>
          <TodoList viewer={this.props.viewer} />
          {hasTodos &&
            <TodoListFooter
              todos={this.props.viewer.todos}
              viewer={this.props.viewer}
            />
          }
        </section>
      </div>
    );
  }
}

export default createFragmentContainer(TodoApp, {
  viewer: graphql`
    fragment TodoApp_viewer on User {
      id,
      totalCount,
      ...TodoListFooter_viewer,
      ...TodoList_viewer,
    }
  `,
});
