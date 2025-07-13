import { EmployeeEntity } from './employeeEntity';

describe('EmployeeEntity', () => {
  it('should create an instance', () => {
    expect(new EmployeeEntity("andrew", new Date(), "London", 1000)).toBeTruthy();
  });
});
