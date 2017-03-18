// core/navbar.component.ts
import { Component } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
    moduleId: module.id,
    selector: 'aa-home',
    templateUrl: 'home.component.html',
    styles: [`
    [hidden] {
        display: none;
    }
  `]
})

export class HomeComponent {
    errorMessage: string;
    employees: IEmployee;

    constructor(private _employeeService: EmployeeService) {

    }

    addprop(e,action){
        if(action === 0){
            console.log('Remove:' + e);
        }else {
            console.log('Add:' + e);
        }
        
    }
    ngOnInit(): void {
        this._employeeService.getEmployees()
                .subscribe(employees => this.employees = employees,
                           error => this.errorMessage = <any>error);
    }

 }