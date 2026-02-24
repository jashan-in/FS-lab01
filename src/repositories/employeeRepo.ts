import { employeesData } from "../data/employees"

let employees = [...employeesData]

export const employeeRepo = {
  getEmployees() {
    return employees
  },

  getDepartments() {
    return [...new Set(employees.map(e => e.department))]
  },

  createEmployee(employee: {
    firstName: string
    lastName: string
    department: string
  }) {
    employees = [...employees, employee]
    return employees
  }
}