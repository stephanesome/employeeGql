import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";
import {EmployeeService} from "../service/employee-service";
import { Router, RouterLink } from "@angular/router";
import {EmployeeEntity} from "../model/employeeEntity";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.html',
  styleUrls: ['./employee.css'],
  imports: [RouterLink, ReactiveFormsModule]
})
export class Employee {
  employeeForm = this.builder.group({
    name: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
    city: ['', Validators.required],
    salary: [0, Validators.required],
    gender: ['', Validators.pattern('^[MFX]$')],
    email: ['', Validators.email]
  });

  get name(): AbstractControl<string> {return <AbstractControl<string>>this.employeeForm.get('name'); }
  get dateOfBirth(): AbstractControl<string> {return <AbstractControl<string>>this.employeeForm.get('dateOfBirth'); }
  get city(): AbstractControl<string> {return <AbstractControl>this.employeeForm.get('city'); }
  get salary(): AbstractControl<number> {return <AbstractControl<number>>this.employeeForm.get('salary'); }
  get gender(): AbstractControl<string> {return <AbstractControl<string>>this.employeeForm.get('gender'); }
  get email(): AbstractControl<string> {return <AbstractControl<string>>this.employeeForm.get('email'); }

  constructor(private builder: FormBuilder,
              private employeeService: EmployeeService,
              private router: Router) { }


  onSubmit() {
    const employee: EmployeeEntity = new EmployeeEntity("",
      this.name.value,
      this.dateOfBirth.value,
      this.city.value,
      this.salary.value,
      this.gender.value,
      this.email.value);
    this.employeeService.addEmployee(employee).subscribe(
      {
        next: () => {
          this.employeeForm.reset();
          this.router.navigate(['/employees']).then(() => {
          })
        }
      }
    )
  }
}
