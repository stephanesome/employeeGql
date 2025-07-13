import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {EmployeeEntity} from "../model/employeeEntity";
import {Apollo} from "apollo-angular";
import {gql} from "@apollo/client/core";

const GET_EMPLOYEES = gql`
query {
  employees {
    id
    name
    dateOfBirth
    city
    salary
    gender
    email
  }
}
`;

const ADD_EMPLOYEE = gql`
mutation addEmployee($name: String!,
  $dateOfBirth: String!,
  $city: String!,
  $salary: Float!,
  $gender: String!,
  $email: String!) {
  newEmployee(createEmployeeInput: {name: $name, dateOfBirth: $dateOfBirth, city: $city, salary: $salary, gender: $gender, email: $email}) {
    id
    name
    dateOfBirth
    city
    salary
    gender
    email
  }
}
`;

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees$: BehaviorSubject<readonly EmployeeEntity[]> = new BehaviorSubject<readonly EmployeeEntity[]>([]);

  constructor(private apollo: Apollo) {
    this.apollo.watchQuery<any>({query: GET_EMPLOYEES}).valueChanges.pipe(
      map(({data, loading}) => {
        this.employees$.next(data.employees);
      })
    ).subscribe();
  }

  get $(): Observable<readonly EmployeeEntity[]> {
    return this.employees$.asObservable();
  }

  addEmployee(employee: EmployeeEntity) {
    return this.apollo.mutate<any>({mutation: ADD_EMPLOYEE, variables: {
      name: employee.name,
      dateOfBirth: employee.dateOfBirth,
      city: employee.city,
      salary: employee.salary,
      gender: employee.gender,
      email: employee.email
    }}).pipe(
          map(({data, loading}) => {
            this.employees$.next([...this.employees$.getValue(), data.newEmployee]);
          })
    )
  }
}
