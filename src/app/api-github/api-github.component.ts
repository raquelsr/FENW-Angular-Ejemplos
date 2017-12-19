import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { GithubService } from './github.service';

@Component({
  selector: 'app-api-github',
  templateUrl: './api-github.component.html'
})
export class ApiGithubComponent {

  private repositories: string[];

  constructor(private service: GithubService) { }

  isEmpty(): boolean {
    if (this.repositories !== undefined) {
      return this.repositories.length === 0;
    }
    return false;
  }
  search(user: string) {
    this.repositories = undefined;
    this.service.getRepositories(user).subscribe(
      repositories => this.repositories = repositories,
      error => alert(error)
    );
  }
}
