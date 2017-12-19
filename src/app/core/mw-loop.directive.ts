import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
    selector: '[mwLoop]'
})
export class MwLoopDirective {

    constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

    @Input('mwLoop') set loop(num: number) {
        for (let i = 0; i < num; i++) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
    }
}
