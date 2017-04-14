class userListController {

  constructor($scope, $http) {
    this.headers = [{
      name: 'id',
      title: 'id'
    }, {
      name: 'name',
      title: 'name'
    }, {
      name: 'surname',
      title: 'surname'
    }, {
      name: 'date',
      title: 'date of birth'
    }, {
      name: 'number',
      title: 'mobile number'
    }, {
      name: 'address',
      title: 'address (city + street + house number)'
    }];

    $http
      .get('app/userList/users.json')
      .then(response => {
        this.users = response.data;
      });
  }
}

export const userList = {
  template: require('./userList.html'),
  controller: userListController
};
