// core/navbar.component.ts
import { Component } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
    moduleId: module.id,
    selector: 'aa-home',
    templateUrl: 'home.component.html'
})

export class HomeComponent {
    errorMessage: string;
    employees: IEmployee[];

    constructor(private _employeeService: EmployeeService) {

    }
    ngOnInit(): void {
        this._employeeService.getEmployees()
                .subscribe(employees => this.employees = employees,
                           error => this.errorMessage = <any>error);
    }

 }