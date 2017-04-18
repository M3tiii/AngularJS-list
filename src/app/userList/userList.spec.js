import angular from 'angular';
import 'angular-mocks';
import {
  userList
} from './userList';

const usersJson = [{
  id: '0',
  name: 'name0'
}, {
  id: '1',
  name: 'name1'
}];

describe('user-list component', () => {
  beforeEach(() => {
    angular
      .module('userList', ['app/userList/userList.html'])
      .component('userList', userList);
    angular.mock.module('userList');
  });

  it('list should get users and render <list>', angular.mock.inject(($rootScope, $compile, $httpBackend) => {
    $httpBackend.when('GET', 'app/models/users.json').respond(usersJson);
    const element = $compile('<user-list></user-list>')($rootScope);
    $httpBackend.flush();
    $rootScope.$digest();
    const users = element.find('list');
    expect(users.length).toEqual(1);
  }));
});
