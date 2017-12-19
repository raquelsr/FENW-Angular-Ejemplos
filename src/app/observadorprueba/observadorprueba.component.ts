
import { Component, OnInit } from '@angular/core';
import { ObservableSubject } from '../observer/observable-subject.model';

@Component({
    selector: 'app-observer-prueba-2',
    template: `<h3>Observador del contador:<h3>
                <p>--->  {{valor_contador}}</p>`
})

export class ObservadorPrueba implements OnInit{
    valor_contador: String;

    private observableSubject: ObservableSubject = new ObservableSubject();

    ngOnInit(): void {
       
          
    }
}