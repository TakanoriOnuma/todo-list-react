import { configure } from '@storybook/react';

import '~root/src/css/style.scss';

function loadStories() {
  require('../stories/TodoInputter.js');
  require('../stories/Todo.js');
  require('../stories/TodoList.js');
}

configure(loadStories, module);
