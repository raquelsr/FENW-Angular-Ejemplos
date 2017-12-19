import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
    selector: '[mwFor]'
})
export class MwForDirective {

    constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {
    }

    @Input('mwForOf') set mwForOf(of) {
        of.forEach(item => {
            this.viewContainer.createEmbeddedView(this.templateRef, { $implicit: item });
        });
    }
}
