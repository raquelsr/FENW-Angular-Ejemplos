import { Routes, RouterModule } from '@angular/router';

import { RouteComponent } from './route/route.component';
import { HomeComponent } from './home/home.component';
import { RoutePruebaComponent } from './routeprueba/routeprueba.component';

const appRoutes = [
  { path: 'route/:id', component: RouteComponent, },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'prueba/:id', component: RoutePruebaComponent}
];
export const route = RouterModule.forRoot(appRoutes);
