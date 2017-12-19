import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'app-api-response',
    template: `<button (click)="search()">Search</button>(https://api.github.com/repositories/113993319)
               <p>status: {{status}}</p>
               <p>statusText: {{statusText}}</p>
               <p>json: {{json}}</p>
               <p>id: {{id}}</p>
               <p>name: {{name}}</p>
               <p>owner: login: {{ownerLogin}}</p>
               <p>html_url: {{htmlUrl}}</p>
               <p><button (click)="searchId()">Search Id</button>{{id2}}</p>
               `
})
export class ApiResponseComponent {
    static url = 'https://api.github.com/repositories/113993319';
    status: number;
    statusText: string;
    json: string;
    id: number;
    name: string;
    ownerLogin: string;
    htmlUrl: string;

    id2: number;

    constructor(private http: Http) { }

    search() {
        this.http.get(ApiResponseComponent.url).subscribe(response => {
            this.status = response.status;
            this.statusText = response.statusText;
            this.json = response.text();
            this.id = response.json().id;
            this.name = response.json().name;
            this.ownerLogin = response.json().owner.login;
            this.htmlUrl = response.json().html_url;
        });
    }
    searchId() {
        this.http.get(ApiResponseComponent.url).map(response => response.json().id)
            .subscribe(id => this.id2 = id);
    }
}
