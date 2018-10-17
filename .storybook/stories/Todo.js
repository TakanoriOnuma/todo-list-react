import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, date } from '@storybook/addon-knobs/react';
import uuid from 'uuid';

import Todo from '~/components/Todo';

const TODO = {
  id: uuid(),
  isDone: false,
  text: 'todo',
  deadline: new Date()
};

/**
 * todoデータを返す
 * @param {{ id: string, isDone: boolean, text: string, deadline: Date }} defaultValue - デフォルトのデータ
 * @returns {{ id: string, isDone: boolean, text: string, deadline: Date }} - 最終的なデータ
 */
function todoData(defaultValue) {
  const id = text('id', defaultValue.id || 'default');
  const isDone = boolean('isDone', defaultValue.isDone || false);
  const todoText = text('text', defaultValue.text || 'todo');
  const deadline = date('deadline', defaultValue.deadlline || new Date());
  return {
    id,
    isDone,
    text: todoText,
    deadline: new Date(deadline)
  };
}

storiesOf('Todo', module)
  .addDecorator(withKnobs)
  .add('not done', () => (
    <Todo
      todo={todoData(TODO)}
      onStatusChange={action('statusChange')}
      onDelete={action('delete')}
    />
  ))
  .add('done', () => (
    <Todo
      todo={todoData({
        ...TODO,
        isDone: true
      })}
      onStatusChange={action('statusChange')}
      onDelete={action('delete')}
    />
  ));
