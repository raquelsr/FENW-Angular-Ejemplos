import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/employee.model';

@Component({
    selector: 'app-directive-ng',
    templateUrl: './directive-ng.component.html'
})
export class DirectiveNgComponent {
    employees = new Array<Employee>();
    addEmployee(name: string) {
        this.employees.push({ name: name, checked: false });
    }
    isProfessor(employee: Employee): boolean {
        return 'jesus' === employee.name.toLowerCase();
    }
    removeEmployee(employe: Employee) {
        const index = this.employees.indexOf(employe);
        if (index > -1) { this.employees.splice(index, 1); }
    }
}
