import {Component} from '@angular/core';
import {EmployeeService} from "../service/employee-service";
import {EmployeeEntity} from "../model/employeeEntity";
import { RouterLink } from '@angular/router';
import { AsyncPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.html',
  styleUrls: ['./employees.css'],
  imports: [RouterLink, AsyncPipe, DatePipe]
})
export class Employees {
  constructor(protected employees: EmployeeService) {
  }

  identify(index: number, employee: EmployeeEntity): string {
    return employee.id;
  }
}
