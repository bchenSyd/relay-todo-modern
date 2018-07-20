// @flow
import React from 'react';
import ReactDOM from 'react-dom';
const PropTypes = require('prop-types');

const ENTER_KEY_CODE = 13;
const ESC_KEY_CODE = 27;

type Props = {
  //className?: string,
  commitOnBlur: boolean,
  initialValue?: string,
  onCancel?: () => void,
  onDelete?: () => void,
  onSave: string => void,
  placeholder?: string,
};

type State = {
  isEditing: boolean,
  text: string,
};
export default class TodoTextInput extends React.Component<Props, State> {
  static defaultProps = {
    commitOnBlur: false,
  };
  state = {
    isEditing: false,
    text: this.props.initialValue || '',
  };
  componentDidMount() {
    ReactDOM.findDOMNode(this).focus();
  }
  _commitChanges = () => {
    const newText = this.state.text.trim();
    if (this.props.onDelete && newText === '') {
      this.props.onDelete();
    } else if (this.props.onCancel && newText === this.props.initialValue) {
      this.props.onCancel();
    } else if (newText !== '') {
      this.props.onSave(newText);
      this.setState({ text: '' });
    }
  };
  _handleBlur = () => {
    if (this.props.commitOnBlur) {
      this._commitChanges();
    }
  };
  _handleChange = e => {
    this.setState({ text: e.target.value });
  };
  _handleKeyDown = e => {
    if (this.props.onCancel && e.keyCode === ESC_KEY_CODE) {
      this.props.onCancel();
    } else if (e.keyCode === ENTER_KEY_CODE) {
      this._commitChanges();
    }
  };
  render() {
    return (
      <input
        className={this.props.className}
        onBlur={this._handleBlur}
        onChange={this._handleChange}
        onKeyDown={this._handleKeyDown}
        placeholder={this.props.placeholder}
        value={this.state.text}
      />
    );
  }
}
