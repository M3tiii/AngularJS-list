import angular from 'angular';

import {
  userListModule
} from './app/userList/index';

import {
  listModule
} from './app/list/index';

import {
  main
} from './app/main';

import './index.scss';

angular
  .module('app', [userListModule, listModule])
  .component('app', main);
