import { useState } from "react"

export function EmployeeForm({ employees, setEmployees }: any) {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [department, setDepartment] = useState("")

  function handleSubmit(e: any) {
    e.preventDefault()

    if (firstName.trim().length < 3) return
    if (!department) return

    setEmployees([
      ...employees,
      { firstName, lastName, department }
    ])

    setFirstName("")
    setLastName("")
    setDepartment("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Employee</h3>

      <input
        placeholder="First Name"
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />

      <input
        placeholder="Last Name"
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />

      <select
        value={department}
        onChange={e => setDepartment(e.target.value)}
      >
        <option value="">Select Department</option>
        {[...new Set(employees.map((e: any) => e.department))].map(
          (dept: string) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          )
        )}
      </select>

      <button type="submit">Add Employee</button>
    </form>
  )
}
