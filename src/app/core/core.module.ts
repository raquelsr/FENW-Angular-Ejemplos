import { NgModule } from '@angular/core';

import { MwHiddenDirective } from './mw-hidden.directive';
import { MwUnderlineDirective } from './mw-underline.directive';
import { MwIfDirective } from './mw-if.directive';
import { MwLoopDirective } from './mw-loop.directive';
import { MwDelayDirective } from './mw-delay.directive';
import { MwMessagesDirective } from './mw-messages.directive';
import { MwForDirective } from './mw-for.directive';

@NgModule({
    declarations: [
        MwHiddenDirective,
        MwUnderlineDirective,
        MwIfDirective,
        MwLoopDirective,
        MwDelayDirective,
        MwMessagesDirective,
        MwForDirective
    ],
    exports: [
        MwHiddenDirective,
        MwUnderlineDirective,
        MwIfDirective,
        MwLoopDirective,
        MwDelayDirective,
        MwMessagesDirective,
        MwForDirective
    ]
})
export class CoreModule {
}
