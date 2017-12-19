import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpService {

    static URI = 'http://localhost:8080/api/v0';

    private params: URLSearchParams;

    private headers: Headers;

    constructor(private http: Http) {
        this.params = new URLSearchParams();
        this.headers = new Headers();
    }

    param(key: string, value: string): HttpService {
        this.params.append(key, value);
        return this;
    }

    header(key: string, value: string): HttpService {
        this.headers.append(key, value);
        return this;
    }

    get(endpoint: string): Observable<any> {
        return this.http.get(HttpService.URI + endpoint, this.createOptions()).map(
            response => this.extractData(response)).catch(this.handleError);
    }

    post(endpoint: string, body?: Object): Observable<any> {
        return this.http.post(HttpService.URI + endpoint, body, this.createOptions()).map(
            response => this.extractData(response)).catch(this.handleError);
    }

    delete(endpoint: string): Observable<any> {
        return this.http.delete(HttpService.URI + endpoint, this.createOptions()).map(
            response => this.extractData(response)).catch(this.handleError);
    }

    put(endpoint: string, body?: Object): Observable<any> {
        return this.http.put(HttpService.URI + endpoint, body, this.createOptions()).map(
            response => this.extractData(response)).catch(this.handleError);
    }

    patch(endpoint: string, body?: Object): Observable<any> {
        return this.http.patch(HttpService.URI + endpoint, body, this.createOptions()).map(
            response => this.extractData(response)).catch(this.handleError);
    }

    private createOptions(): RequestOptions {
        const options: RequestOptions = new RequestOptions({ headers: this.headers, params: this.params });
        this.headers = new Headers();
        this.params = new URLSearchParams();
        return options;
    }

    private extractData(res: Response): any {
        if (res.text()) {
            if (res.headers.get('content-type').indexOf('application/json') !== -1) {
                return res.json(); // Para filtrar: .map((item: Item) => item.???)
            } else {
                return res.text();
            }
        } else {
            return res;
        }
    }

    private handleError(error: Response): any {
        try {
            return Observable.throw('ERROR: exception:'
                + error.json().exception + ', message:'
                + error.json().message + ', path:'
                + error.json().path);
        } catch (e) {
            return Observable.throw(error);
        }
    }
}
