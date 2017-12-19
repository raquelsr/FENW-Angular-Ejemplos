import { Component } from '@angular/core';

@Component({
    selector: 'app-pipe',
    template: `<p>Hoy es {{ today | date:format }}</p>
               <button (click)="toggleFormat()">Toggle Format</button>`
})
export class PipeComponent {
    today = new Date();
    toggle = true; // start with true == shortDate

    get format() { return this.toggle ? 'shortDate' : 'fullDate'; }
    toggleFormat() { this.toggle = !this.toggle; }
}
