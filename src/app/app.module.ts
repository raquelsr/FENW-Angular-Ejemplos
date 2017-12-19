import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { HttpService } from './core/http.service';
import { CoreModule } from './core/core.module';
import { NumberComponent } from './core/number/number.component';

import { route } from './app-route.module';
import { AppComponent } from './app.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { BindingComponent } from './binding/binding.component';
import { DirectiveNgComponent } from './directive-ng/directive-ng.component';
import { CrudComponent } from './crud/crud.component';
import { ApiResponseComponent } from './api-response/api-response.component';
import { ApiGithubComponent } from './api-github/api-github.component';
import { HomeComponent } from './home/home.component';
import { RouteComponent } from './route/route.component';
import { SubCompComponent } from './sub-comp/sub-comp.component';
import { DirectiveMiwComponent } from './directive-miw/directive-miw.component';
import { PipeComponent } from './pipe/pipe.component';
import { ObserverComponent } from './observer/observer.component';
import { GithubService } from './api-github/github.service';
import { ApiItemsComponent } from './api-items/api-items.componet';
import { ApiItemsService } from './api-items/api-items.service';
<<<<<<< HEAD
import { SubCompComponentPrueba } from './sub-comp/sub-comp.component.prueba';
import { RoutePruebaComponent } from './routeprueba/routeprueba.component';
import { ObservablePrueba } from './observerprueba/observableprueba.component';
import { ObservadorPrueba } from './observadorprueba/observadorprueba.component';
=======
import { CounterObservableComponent } from './counter-observable/counter-observable.component';



>>>>>>> 3fdeea6cb8948ce0d085d40b2860a9d0d2019807
@NgModule({
  imports: [
    BrowserModule, FormsModule, HttpModule, CoreModule, route
  ],
  declarations: [
    AppComponent, TypescriptComponent, BindingComponent, SubCompComponent, DirectiveNgComponent,
    CrudComponent, ApiResponseComponent, ApiGithubComponent, ApiItemsComponent, HomeComponent, RouteComponent, NumberComponent,
<<<<<<< HEAD
    DirectiveMiwComponent, ObserverComponent, PipeComponent, SubCompComponentPrueba, RoutePruebaComponent, ObservablePrueba, ObservadorPrueba
=======
    DirectiveMiwComponent, ObserverComponent, PipeComponent, CounterObservableComponent
>>>>>>> 3fdeea6cb8948ce0d085d40b2860a9d0d2019807
  ],
  bootstrap: [AppComponent],
  providers: [HttpService, GithubService, ApiItemsService]

})
export class AppModule { }
