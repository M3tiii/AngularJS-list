class userListController {

  constructor($http) {
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
