import { employees } from "../data/employees"

export function EmployeeList() {
  return (
    <main>
      <h2>Employee List</h2>

      {employees.map((emp, index) => (
        <p key={index}>
          {emp.firstName} {emp.lastName} — {emp.department}
        </p>
      ))}
    </main>
  )
}
