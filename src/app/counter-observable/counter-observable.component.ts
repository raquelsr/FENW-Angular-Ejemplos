import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-counter-observable',
    template: `<h3>Counter</h3>
               <button (click)="increase()">+</button> {{counter}}
               <h3>Observer: {{observer}}</h3>`
})
export class CounterObservableComponent implements OnInit {
    counter = 0;

    counterSubject: Subject<number> = new Subject();

    observer: number;

    ngOnInit(): void {
        this.counterSubject.asObservable().subscribe(
            value => this.observer = value,
            error => alert(error),
            () => alert('Counter complete!!!')
        );
    }


    increase() {
        this.counter++;
        if (this.counter > 9) {
            this.counterSubject.complete();
        } else {
            this.counterSubject.next(this.counter);
        }
    }
}
