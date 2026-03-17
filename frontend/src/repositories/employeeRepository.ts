export const employeeRepository = {
  async getEmployees() {
    const res = await fetch("http://localhost:3000/api/employees")
    return res.json()
  },

  async getDepartments() {
    const res = await fetch("http://localhost:3000/api/employees/departments")
    return res.json()
  },

  async createEmployee(employee: {
    firstName: string
    lastName: string
    department: string
  }) {
    const res = await fetch("http://localhost:3000/api/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(employee)
    })

    return res.json()
  }
}