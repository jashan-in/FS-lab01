import { employeeRepository } from "../repositories/employeeRepository"

export const employeeService = {
  getEmployees() {
    return employeeRepository.getEmployees()
  },

  getDepartments() {
    return employeeRepository.getDepartments()
  },

  createEmployee(data: {
    firstName: string
    lastName: string
    department: string
  }) {

    if (!data.firstName || data.firstName.trim().length < 3) {
      throw new Error("First name must be at least 3 characters.")
    }

    if (!data.lastName || data.lastName.trim().length < 3) {
      throw new Error("Last name must be at least 3 characters.")
    }

    if (!data.department || data.department.trim().length === 0) {
      throw new Error("Department is required.")
    }

    return employeeRepository.createEmployee(data)
  }
}