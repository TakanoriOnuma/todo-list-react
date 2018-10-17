import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './css/TodoInputter.scss';

const propTypes = {
  onSubmitTodo: PropTypes.func.isRequired
};
export default class TodoInputter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoText: '',
      deadline: ''
    };
  }

  /**
   * 送信
   * @param e - Reactのイベント
   */
  onSubmit = (e) => {
    e.preventDefault();

    const { todoText, deadline } = this.state;
    this.props.onSubmitTodo({
      text: todoText,
      deadline: new Date(deadline)
    });

    // データをリセットする
    this.setState({
      todoText: '',
      deadline: ''
    });
  };

  render() {
    const { todoText, deadline } = this.state;
    const canSubmittion = todoText !== '' && deadline !== '';
    return (
      <form
        className={styles.form}
        onSubmit={this.onSubmit}
      >
        <p>create todo</p>
        <div className={styles.form__item}>
          <input
            value={todoText}
            type="text"
            placeholder="todo"
            onChange={(e) => { this.setState({ todoText: e.target.value }); }}
          />
        </div>
        <div className={styles.form__item}>
          <label htmlFor="date">締切：</label>
          <input
            id="date"
            type="date"
            value={deadline}
            onChange={(e) => { this.setState({ deadline: e.target.value }); }}
          />
        </div>
        <div className={styles.form__item}>
          <button
            type="submit"
            disabled={!canSubmittion}
          >
            登録
          </button>
        </div>
      </form>
    );
  }
}
TodoInputter.propTypes = propTypes;
