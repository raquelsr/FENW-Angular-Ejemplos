import { Component, OnInit} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { ObservableSubject } from '../observer/observable-subject.model';

@Component({
    selector: 'app-observer-prueba',
    template: `
      <h3>Ejercicio</h3>
        <p> Contador : {{cont}} </p>
        <button (click)=sumar()>Sumar</button>
        <h3>Observador del contador:<h3>
        <p>--->  {{data}}</p>`
  })

export class ObservablePrueba implements OnInit{

    cont : number = 0;
    data : number;
    private subject: Subject<Number> = new Subject();
    private observableSubject: ObservableSubject = new ObservableSubject();
    
    sumar(){
        this.cont++;
        if(this.cont == 10){
            this.subject.complete();
        } else {
            this.subject.next(this.cont);
        }
    }

    getObservable(): Observable<Number>{
        return this.subject.asObservable();
    }


    ngOnInit(): void {
        this.subject.subscribe( // Observador
            data => this.data = this.cont,
            error => alert('ObserverPrueba, error code: ' + error),
            () => alert('FINISHHHH!')
        );
    }
}