import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Employees } from './employees';

describe('Employees', () => {
  let component: Employees;
  let fixture: ComponentFixture<Employees>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [Employees]
});
    fixture = TestBed.createComponent(Employees);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
