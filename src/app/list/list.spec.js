import angular from 'angular';
import 'angular-mocks';
import {
  list
} from './list';

describe('list component', () => {
  beforeEach(() => {
    angular
      .module('list', ['app/list/list.html'])
      .component('list', list);
    angular.mock.module('list');
  });

  it('should render table', angular.mock.inject(($rootScope, $compile) => {
    const scope = $rootScope;
    const element = $compile('<list></list>')(scope);
    scope.$apply();
    scope.$digest();
    expect(element.find('table').length).toEqual(1);
  }));

  it('should render 2 item-row', angular.mock.inject(($rootScope, $compile) => {
    const scope = $rootScope.$new();
    const element = $compile('<list headers="headers" data="data"></list>')(scope);

    scope.data = [{
      id: '0',
      name: 'name0'
    }, {
      id: '1',
      name: 'name1'
    }];

    scope.headers = [{
      name: 'id',
      title: 'id',
      type: 'text'
    }, {
      name: 'name',
      title: 'name',
      type: 'text'
    }];

    scope.$apply();
    scope.$digest();

    const users = element[0].querySelectorAll('.item-row');
    expect(users.length).toEqual(2);
  }));
});
