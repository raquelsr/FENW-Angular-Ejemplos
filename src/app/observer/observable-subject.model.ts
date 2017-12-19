import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/timer';

export class ObservableSubject {
    private subject: Subject<String> = new Subject();
 
    constructor() {
        const timer = Observable.timer(1000, 1000);
        const subscription: Subscription = timer.subscribe(t => {
            if (t > 4) {
                subscription.unsubscribe();
                this.subject.complete();
            } else {
                this.subject.next(String(5 - t));
            }
        });
    }

    getObservable(): Observable<String> {
        return this.subject.asObservable();
    }
}
