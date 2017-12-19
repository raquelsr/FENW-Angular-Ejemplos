import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-binding',
    templateUrl: './binding.component.html'
})
export class BindingComponent {
    title = 'Angular. Demo';
    prueba = 'prueba';
    prueba2 = 'prueba2';
    
    getValue(): string {
        return 'valor';
    }
    event(title: string) {
        this.title = title;
    }
    event2(msg: any) {
        alert(msg);
    }
    event3(){
        this.prueba2=this.prueba;
    }
}
