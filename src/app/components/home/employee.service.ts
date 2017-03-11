import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { IEmployee } from './employee';

@Injectable()
export class EmployeeService {
    private _employeeUrl = 'assets/fakeData/employee.json';

    constructor(private _http: Http) { }

    getEmployees(): Observable<IEmployee[]> {
        return this._http.get(this._employeeUrl)
            .map((response: Response) => <IEmployee[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getEmployee(id: number): Observable<IEmployee> {
        return this.getEmployees()
            .map((products: IEmployee[]) => products.find(p => p.employeeId === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}