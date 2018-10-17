import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TodoInputter from '~/components/TodoInputter';

storiesOf('TodoInputter', module)
  .add('input', () => (
    <TodoInputter
      onSubmitTodo={action('submit')}
    />
  ));
