import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Item } from './item.model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html'
})
export class CrudComponent implements OnInit {
  title = 'Angular 2: CRUD en Array';
  items: Array<Item> = new Array<Item>();
  itemCreate: Item = new Item(undefined, undefined);
  itemEdit: Item;
  itemUpdate: Item = new Item(undefined, undefined);

  ngOnInit() {
    this.items.push(new Item(1, 'uno'));
    this.items.push(new Item(2, 'dos'));
    this.items.push(new Item(3, 'tres'));
  }

  addItem() {
    this.items.push(this.itemCreate);
    this.itemCreate = new Item(undefined, undefined);
  }

  editItem(item: Item) {
    this.itemEdit = item;
    this.itemUpdate.id = item.id;
    this.itemUpdate.name = item.name;
  }

  removeItem(item: Item) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  updateItem(item: Item) {
    this.itemEdit.id = this.itemUpdate.id;
    this.itemEdit.name = this.itemUpdate.name;
    this.itemUpdate = new Item(undefined, undefined);
  }
}
