import { Injectable } from '@angular/core';
import { HttpService } from '../core/http.service';
import { Item } from '../api-items/item.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ApiItemsService {
    static URI = '/items';

    private readItem: Subject<Item> = new Subject();

    private updateItem: Subject<Item> = new Subject();

    private allItems: Subject<Item[]> = new Subject();

    constructor(private httpService: HttpService) { }

    getAllItems(): Observable<Item[]> {
        this.readAll();
        return this.allItems.asObservable();
    }

    getUpdateItem(): Observable<Item> {
        return this.updateItem.asObservable();
    }

    prepareUpdate(id: number) {
        this.httpService.get(ApiItemsService.URI + '/' + id).subscribe(
            (itemValue: Item) => this.updateItem.next(itemValue),
            error => alert(error)
        );
    }

    getReadItem(): Observable<Item> {
        return this.readItem.asObservable();
    }

    read(id: number) {
        this.httpService.get(ApiItemsService.URI + '/' + id).subscribe(
            (itemValue: Item) => this.readItem.next(itemValue),
            error => alert(error),
        );
    }

    private readAll() {
        this.httpService.get(ApiItemsService.URI).subscribe(
            (itemsArray: Item[]) => this.allItems.next(itemsArray),
            error => alert(error)
        );
    }

    delete(id: number) {
        this.httpService.delete(ApiItemsService.URI + '/' + id).subscribe(
            () => this.readAll(),
            error => alert(error)
        );
    }

    create(item: Item) {
        this.httpService.post(ApiItemsService.URI, item).subscribe(
            () => this.readAll(),
            error => alert(error)
        );
    }

    update(item: Item) {
        this.httpService.put(ApiItemsService.URI + '/' + item.id, item).subscribe(
            () => this.readAll(),
            error => alert(error)
        );
    }
}
