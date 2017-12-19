import { Component, OnInit } from '@angular/core';
import { HttpService } from '../core/http.service';
import { Item } from './item.model';

@Component({
  selector: 'app-api-items',
  templateUrl: './api-items.component.html'
})
export class ApiItemsComponent implements OnInit {
  static PATH = '/items';
  items: Item[];
  updateCheked = false;
  updateItem: Item = { id: 0, name: '' };
  creationItem: Item = { id: 0, name: '' };

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.httpService.get(ApiItemsComponent.PATH).subscribe(
      items => this.items = items,
      error => alert(error)
    );
  }

  read(id: number) {
    this.httpService.get(ApiItemsComponent.PATH + '/' + id).subscribe(
      data => alert(data.id + ':' + data.name + ',' + data.description),
      error => alert(error)
    );
  }

  create() {
    this.httpService.post(ApiItemsComponent.PATH, this.creationItem).subscribe(
      data => this.findAll(),
      error => alert(error)
    );
  }

  delete(id: number) {
    this.httpService.delete(ApiItemsComponent.PATH + '/' + id).subscribe(
      data => this.findAll(),
      error => alert(error)
    );
  }

  update(id: number) {
    this.updateCheked = true;
    this.httpService.get(ApiItemsComponent.PATH + '/' + id).subscribe(
      data => this.updateItem = data,
      error => alert(error)
    );
  }

  save() {
    this.updateCheked = false;
    this.httpService.put(ApiItemsComponent.PATH + '/' + this.updateItem.id, this.updateItem).subscribe(
      data => this.findAll(),
      error => alert(error)
    );
  }
}
