import { Component } from '@angular/core';
import { RouterLink } from '@angular/router/src/directives/router_link';

@Component({
  template: `
    <h2>Routing</h2>
    <ul>
      <li><a [routerLink]="['/route', 1]">Route 1</a></li>
      <li><a [routerLink]="['/route', 2]">Route 2</a></li>
      <li><a [routerLink]="['/route', 3]">Route 3</a></li>
      <li><a [routerLink]="['/prueba', 333]">Prueba</a></li>
      <p><button (click)='prueba()'>prueba</button></p>
    </ul>`
})
export class HomeComponent { 

  prueba(){
    
  }
}
