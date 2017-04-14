import angular from 'angular';

import {
  list
} from './list';

export const listModule = 'list';

angular
  .module(listModule, [])
  .component('list', list);
