import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class GithubService {
  constructor(private http: Http) { }
  getRepositories(user: string): Observable<string[]> {
    const url = `https://api.github.com/users/${user}/repos`;
    return this.http.get(url).map(
      response => response.json().map(repository => repository.name)
    ) // Los datos se filtran antes de ser enviados
    .catch(
      response => Observable.throw('Server error. ' + response.statusText)
    ); // para generar una nuevo error
  }
}
