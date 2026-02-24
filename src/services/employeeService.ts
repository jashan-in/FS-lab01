import { employeeRepo } from "../repositories/employeeRepo"

export const employeeService = {
  createEmployee(data: {
    firstName: string
    lastName: string
    department: string
  }) {
    const departments = employeeRepo.getDepartments()

    if (data.firstName.trim().length < 3) {
      return { success: false, message: "First name must be at least 3 characters." }
    }

    if (!departments.includes(data.department)) {
      return { success: false, message: "Department does not exist." }
    }

    const updated = employeeRepo.createEmployee(data)

    return { success: true, employees: updated }
  }
}