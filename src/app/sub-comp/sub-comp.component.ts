import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-sub-comp',
  template: `<h3>sub-component</h3>
             <p>{{subComponentProperty}}</p>
             <p><button (click)='event2($event)'>event</button>`
})
export class SubCompComponent {

  @Input() subComponentProperty: String;

  @Output() subComponentEvent = new EventEmitter<any>();

  event(msg) {
    this.subComponentEvent.emit(msg);
    // this.subComponentEvent.emit('value');
  }
}
