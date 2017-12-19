import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'number',
    templateUrl: 'number.component.html',
    styleUrls: ['number.component.css'],
})
export class NumberComponent {
    @Input() min: number = undefined;
    @Input() max: number = undefined;
    @Input() value = 0;

    @Output()
    valueOut = new EventEmitter<number>();
    error = false;
    onBlur() {
        this.error = (this.min !== undefined && this.value < this.min)
            || (this.max !== undefined && this.value > this.max);
        if (!this.error) {
            this.valueOut.emit(this.value);
        }
    }
}
