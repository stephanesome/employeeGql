import { Routes } from '@angular/router';
import {Employee} from "./employee/employee";
import {Employees} from "./employees/employees";

export const routes: Routes = [
  {path: 'employee', component: Employee},
  {path: 'employees', component: Employees},
  {path: '', redirectTo: 'employee', pathMatch: 'full'},
  {path: '**', component: Employees}
];

