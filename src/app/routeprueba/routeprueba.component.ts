import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  template: `<h1>Routing Prueba</h1>
             <h3>Esta es la ruta de prueba {{id}}</h3>
             <p><button (click)='back()'>back</button></p>`
})
export class RoutePruebaComponent {
  id: number;
  constructor(private router: Router, activatedRoute: ActivatedRoute) {
    this.id = activatedRoute.snapshot.params['id'];
  }

  back() {
    this.router.navigate(['/home']);
  }
}
