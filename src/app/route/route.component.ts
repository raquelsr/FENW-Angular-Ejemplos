import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  template: `<h1>Routing</h1>
             <h3>Id: {{id}}</h3>
             <p><button (click)='back()'>back</button></p>`
})
export class RouteComponent {
  id: number;
  constructor(private router: Router, activatedRoute: ActivatedRoute) {
    this.id = activatedRoute.snapshot.params['id'];
  }

  back() {
    this.router.navigate(['/home']);
  }

}

