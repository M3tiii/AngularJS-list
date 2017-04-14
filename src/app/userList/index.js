import angular from 'angular';

import {
  userList
} from './userList';

export const userListModule = 'userList';

angular
  .module(userListModule, [])
  .component('userList', userList);
