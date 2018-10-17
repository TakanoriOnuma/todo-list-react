import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import uuid from 'uuid';

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

storiesOf('TodoList', module)
  .add('list', () => (
    <TodoList
      todoList={INITIAL_TODO_LIST}
      onStatusChange={action('statusChange')}
      onDelete={action('delete')}
    />
  ));
