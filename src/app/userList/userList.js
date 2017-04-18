class userListController {

  constructor($scope, $http) {
    this.headers = [{
      name: 'id',
      title: 'id',
      type: 'text'
    }, {
      name: 'name',
      title: 'name',
      type: 'text'
    }, {
      name: 'surname',
      title: 'surname',
      type: 'text'
    }, {
      name: 'date',
      title: 'date of birth',
      type: 'date'
    }, {
      name: 'number',
      title: 'mobile number',
      type: 'tel'
    }, {
      name: 'address',
      title: 'address (city + street + house number)',
      type: 'text'
    }];

    $http
      .get('app/models/users.json')
      .then(response => {
        response.data.forEach(item => {
          item.date = new Date(item.date);
        });
        this.users = response.data;
      });
  }
}

export const userList = {
  template: require('./userList.html'),
  controller: userListController
};
