import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-directive-miw',
    templateUrl: './directive-miw.component.html'
})
export class DirectiveMiwComponent {
    value1 = true;
    value2 = false;
    list: Array<number> = [1, 2, 3];
}
