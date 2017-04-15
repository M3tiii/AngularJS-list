class listController {

  constructor($scope) {
    console.log(this, $scope);
  }

}

export const list = {
  template: require('./list.html'),
  controller: listController,
  bindings: {
    headers: '<',
    data: '<'
  }
};
