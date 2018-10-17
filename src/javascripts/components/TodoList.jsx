import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FlipMove from 'react-flip-move';

import styles from './css/TodoList.scss';

/**
 * 日付をフォーマットする
 * @param {Date} date - Dateインスタンス
 * @returns {string} - フォーマットされた文字列
 */
function formatDate(date) {
  const year = date.getFullYear();
  const month = ('00' + (date.getMonth() + 1)).slice(-2);
  const day = ('00' + date.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
}

// アニメーションの設定
const enterAnimation = {
  from: {
    opacity: 0,
    transform: 'translate3d(0, -30px, 0)'
  },
  to: {
    opacity: 1,
    transform: 'translate3d(0, 0, 0)'
  }
};
const leaveAnimation = {
  from: {},
  to: {
    opacity: 0,
    transform: 'translate3d(0, -30px, 0)'
  }
};

const propTypes = {
  todoList: PropTypes.array.isRequired,
  onStatusChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};
export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAppearAnimationFinish: false // 最初のアニメーションを終了したか
    };
  }

  render() {
    const { isAppearAnimationFinish } = this.state;
    const { todoList } = this.props;
    return (
      <div className={styles.list}>
        <h1 className={styles.list__title}>todolist</h1>
        <FlipMove
          typeName="ul"
          easing="ease"
          duration={500}
          staggerDelayBy={isAppearAnimationFinish ? 0 : 100}
          appearAnimation={enterAnimation}
          enterAnimation={enterAnimation}
          leaveAnimation={leaveAnimation}
          onFinishAll={() => { this.setState({ isAppearAnimationFinish: true }); }}
        >
          {todoList.map((todo) => (
            <li
              key={todo.id}
              className={classNames(styles.todo, {
                [styles.todo_done]: todo.isDone
              })}
            >
              <div className={styles.todo__line}>
                <button
                  className={styles.todo__status}
                  type="button"
                  onClick={() => { this.props.onStatusChange(todo.id); }}
                >
                  {todo.isDone ? 'DONE' : 'DOING'}
                </button>
                <div className={styles.todo__deadline}>締切：{formatDate(todo.deadline)}</div>
                <div
                  className={styles.todo__delete}
                  onClick={() => { this.props.onDelete(todo.id); }}
                />
              </div>
              <div className={styles.todo__text}>{todo.text}</div>
            </li>
          ))}
        </FlipMove>
      </div>
    );
  }
}
TodoList.propTypes = propTypes;
