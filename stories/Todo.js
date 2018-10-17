import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import uuid from 'uuid';

import Todo from '~/components/Todo';

const TODO = {
  id: uuid(),
  isDone: false,
  text: 'todo',
  deadline: new Date()
};

storiesOf('Todo', module)
  .add('not done', () => (
    <Todo
      todo={{
        ...TODO,
        isDone: false
      }}
      onStatusChange={action('statusChange')}
      onDelete={action('delete')}
    />
  ))
  .add('done', () => (
    <Todo
      todo={{
        ...TODO,
        isDone: true
      }}
      onStatusChange={action('statusChange')}
      onDelete={action('delete')}
    />
  ));
