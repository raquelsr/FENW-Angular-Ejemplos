import { Component, OnInit } from '@angular/core';
import { HttpService } from '../core/http.service';
import { Item } from './item.model';
import { ApiItemsService } from '../api-items/api-items.service';

@Component({
  selector: 'app-api-items',
  templateUrl: './api-items.component.html'
})
export class ApiItemsComponent implements OnInit {
  items: Item[];
  updateCheked = false;
  updateItem: Item;
  creationItem: Item;

  constructor(private httpService: HttpService, private apiItemsService: ApiItemsService) { }

  ngOnInit(): void {
    this.updateItem = { id: 0, name: '', description: '' };
    this.creationItem = { id: 0, name: '', description: '' };
    this.apiItemsService.getAllItems().subscribe(items => this.items = items);
    this.apiItemsService.getUpdateItem().subscribe(item => {
      this.updateItem = item;
      this.updateCheked = true;
    });
    this.apiItemsService.getReadItem().subscribe(item => alert(item.id + ':' + item.name + ',' + item.description));
  }

  read(id: number) {
    this.apiItemsService.read(id);
  }

  delete(id: number) {
    this.apiItemsService.delete(id);
  }

  prepareUpdate(id: number) {
    this.apiItemsService.prepareUpdate(id);
  }

  save() {
    this.updateCheked = false;
    this.apiItemsService.update(this.updateItem);
  }

  create() {
    this.apiItemsService.create(this.creationItem);
  }

  cancel() {
    this.updateCheked = false;
  }
}
