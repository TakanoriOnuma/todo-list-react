import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

import styles from './css/TodoList.scss';

// components
import Todo from './Todo';

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
              className={styles.list__item}
            >
              <Todo
                todo={todo}
                onStatusChange={this.props.onStatusChange}
                onDelete={this.props.onDelete}
              />
            </li>
          ))}
        </FlipMove>
      </div>
    );
  }
}
TodoList.propTypes = propTypes;
