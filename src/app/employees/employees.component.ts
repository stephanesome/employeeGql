import {Component} from '@angular/core';
import {EmployeeService} from "../service/employee.service";
import {Employee} from "../model/employee";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  constructor(protected employees: EmployeeService) {
  }

  identify(index: number, employee: Employee): string {
    return employee.id;
  }
}
