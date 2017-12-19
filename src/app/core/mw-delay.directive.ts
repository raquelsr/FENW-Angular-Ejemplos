import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({ selector: '[mwDelay]' })
export class MwDelayDirective {

    constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

    @Input() set mwDelay(delay: number) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        setTimeout(() => {
            this.viewContainer.clear();
        }, delay);
    }
}
