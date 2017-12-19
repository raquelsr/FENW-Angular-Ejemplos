import { Directive, ElementRef, Input, Renderer, OnInit } from '@angular/core';

@Directive({ selector: '[mwHidden]' })
export class MwHiddenDirective implements OnInit {

    @Input() mwHidden: boolean;

    constructor(public elementRef: ElementRef, public renderer: Renderer) { }

    ngOnInit() {
        // Use renderer to render the element with styles
        console.log('hide:' + this.mwHidden);
        if (this.mwHidden) {
            this.renderer.setElementStyle(this.elementRef.nativeElement, 'display', 'none');
        }
    }
}
