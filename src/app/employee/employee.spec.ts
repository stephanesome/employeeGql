import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Employee } from './employee';

describe('Employee', () => {
  let component: Employee;
  let fixture: ComponentFixture<Employee>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [Employee]
});
    fixture = TestBed.createComponent(Employee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
