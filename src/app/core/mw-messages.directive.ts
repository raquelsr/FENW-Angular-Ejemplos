import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
    selector: '[mwMessages]'
})
export class MwMessagesDirective {

    constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

    @Input('mwMessages') set messages(value) {
        this.viewContainer.createEmbeddedView(this.templateRef, { $implicit: 'Hello!!' });
        this.viewContainer.createEmbeddedView(this.templateRef, { $implicit: 'Sr...!!' });
        this.viewContainer.createEmbeddedView(this.templateRef, { $implicit: 'In the morning...' });
    }
}
