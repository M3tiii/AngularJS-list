class listController {

  constructor() {
    this.isSelectedAll = false;
    this.dataEdited = [];
    // this.data = [];
    // this.headers = [];
    this.name = 'aaaaa';
  }
  sayHello() {
    this.name = 'World';
  }

  onEditSelected() {
    let anySelected = false;
    this.data.forEach(item => {
      if (item.isSelected) {
        this.onEdit(item);
        anySelected = true;
      }
    });
    this.isSelectedAll = anySelected;
  }

  onSaveSelected() {
    this.data.forEach(item => {
      if (item.isSelected) {
        this.onSave(item);
      }
    });
    this.isSelectedAll = false;
  }

  onSelect(item) {
    if (item.isEdited) {
      this._backupItem(item);
      this._unselectItem(item);
    }
  }

  onEdit(item) {
    this._selectItem(item);
  }

  onSave(item) {
    this._unselectItem(item);
  }

  onDelete(item) {
    this._unselectItem(item);
    this._removeItemData(item, this.data);
  }

  _backupItem(item) {
    const indexEdited = this.dataEdited.map(item => item.id).indexOf(item.id);
    console.log(item, this.dataEdited[indexEdited]);
    Object.assign(item, this.dataEdited[indexEdited]);
  }

  _removeItemData(item, data) {
    const index = data.map(item => item.id).indexOf(item.id);
    data.splice(index, 1);
  }

  _selectItem(item) {
    item.isEdited = true;
    item.isSelected = true;
    this.dataEdited.push(Object.assign({}, item));
  }

  _unselectItem(item) {
    item.isEdited = false;
    item.isSelected = false;
    this.isSelectedAll = this.isSelectedAll ? this._detectEdited() : false;
    this._removeItemData(item, this.dataEdited);
  }

  _detectEdited() {
    return this.data.filter(item => item.isEdited).length !== 0;
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
