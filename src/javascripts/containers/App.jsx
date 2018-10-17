import React, { Component } from 'react';
import uuid from 'uuid';
import { findIndex } from 'lodash';

import styles from './App.scss';

// components
import TodoInputter from '~/components/TodoInputter';
import TodoList from '~/components/TodoList';

// TODOリストの初期値
const INITIAL_TODO_LIST = [
  {
    id: uuid(),
    isDone: true,
    text: 'todo',
    deadline: new Date()
  },
  {
    id: uuid(),
    isDone: false,
    text: 'todo2',
    deadline: new Date()
  },
  {
    id: uuid(),
    isDone: false,
    text: 'todo3',
    deadline: new Date()
  },
  {
    id: uuid(),
    isDone: true,
    text: 'todo4',
    deadline: new Date()
  },
  {
    id: uuid(),
    isDone: false,
    text: 'todo5',
    deadline: new Date()
  }
];

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: INITIAL_TODO_LIST
    };
  }

  /**
   * TODOの登録
   * @param {{ text: string, deadline: Date }} todo - todo情報
   */
  onSubmitTodo = (todo) => {
    const newTodo = {
      ...todo,
      id: uuid(),
      isDone: false
    };
    const { todoList } = this.state;
    this.setState({
      todoList: [newTodo].concat(todoList)
    });
  };

  /**
   * TODOステータスの切り替え
   * @param {string} todoId - TODO ID
   */
  onTodoStatusChange = (todoId) => {
    const { todoList } = this.state;
    const index = findIndex(todoList, { id: todoId });

    if (index === -1) {
      return;
    }

    const newTodoList = todoList.concat();
    newTodoList[index] = {
      ...newTodoList[index],
      isDone: !newTodoList[index].isDone
    };

    this.setState({
      todoList: newTodoList
    });
  };

  /**
   * TODOの削除
   * @param {string} todoId - TODO ID
   */
  onTodoDelete = (todoId) => {
    const { todoList } = this.state;
    this.setState({
      todoList: todoList.filter((todo) => todo.id !== todoId)
    });
  };

  render() {
    const { todoList } = this.state;
    console.log(todoList);
    return (
      <div className={styles.app}>
        <TodoInputter
          onSubmitTodo={this.onSubmitTodo}
        />
        <TodoList
          todoList={todoList}
          onStatusChange={this.onTodoStatusChange}
          onDelete={this.onTodoDelete}
        />
      </div>
    );
  }
}
