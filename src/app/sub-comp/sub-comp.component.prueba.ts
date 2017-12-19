import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-sub-comp-prueba',
  template: `<h3>sub-component-prueba</h3>
             <p>{{subComponentPropertyPrueba}}</p>
             <p><button (click)='event($event)'>event</button>`
})
export class SubCompComponentPrueba {

  @Input() subComponentPropertyPrueba : string;

  @Output() subComponentEvent = new EventEmitter<any>();

  event(msg) {
    alert(msg);
    this.subComponentEvent.emit(msg);
    // this.subComponentEvent.emit('value');
  }
}
