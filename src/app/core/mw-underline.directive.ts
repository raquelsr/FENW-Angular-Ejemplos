import { Directive, HostListener, Renderer, ElementRef } from '@angular/core';

@Directive({
    selector: '[mwUnderline]'
})
export class MwUnderlineDirective {

    constructor(private renderer: Renderer, private elementRef: ElementRef) { }
    // Event listeners for element hosting
    // the directive
    @HostListener('mouseenter') onMouseEnter() {
        this.hover(true);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.hover(false);
    }
    // Event method to be called on mouse enter and on mouse leave
    hover(shouldUnderline: boolean) {
        if (shouldUnderline) {
            // Mouse enter
            this.renderer.setElementStyle(this.elementRef.nativeElement, 'text-decoration', 'underline');
        } else {
            // Mouse leave
            this.renderer.setElementStyle(this.elementRef.nativeElement, 'text-decoration', 'none');
        }
    }
}
