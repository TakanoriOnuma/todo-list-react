import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from '~/components/css/Todo.scss';

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

const propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
    deadline: PropTypes.instanceOf(Date).isRequired,
    text: PropTypes.string.isRequired
  }).isRequired,
  onStatusChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};
const Todo = (props) => {
  const { todo } = props;
  return (
    <div
      key={todo.id}
      className={classNames(styles.todo, {
        [styles.todo_done]: todo.isDone
      })}
    >
      <div className={styles.todo__line}>
        <button
          className={styles.todo__status}
          type="button"
          onClick={() => { props.onStatusChange(todo.id); }}
        >
          {todo.isDone ? 'DONE' : 'DOING'}
        </button>
        <div className={styles.todo__deadline}>締切：{formatDate(todo.deadline)}</div>
        <div
          className={styles.todo__delete}
          onClick={() => { props.onDelete(todo.id); }}
        />
      </div>
      <div className={styles.todo__text}>{todo.text}</div>
    </div>
  );
};
Todo.propTypes = propTypes;

export default Todo;
