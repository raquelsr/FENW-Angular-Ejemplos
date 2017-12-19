import { Component, OnInit } from '@angular/core';
import { Employee } from './shared/employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // sub-comp
  title = 'Angular. Demo';
  // Number
  value = '';

  processEvent(event: string) {
    alert(event);
  }

  ngOnInit(): void {
    // Se inicializa
  }
}
