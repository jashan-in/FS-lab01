import { useState } from "react"
import { useFormInput } from "../hooks/useFormInput"
import { employeeService } from "../services/employeeService"
import { employeeRepo } from "../repositories/employeeRepo"

type Props = {
  setEmployees: (employees: any[]) => void
}

export function EmployeeForm({ setEmployees }: Props) {
  const firstName = useFormInput("")
  const lastName = useFormInput("")
  const department = useFormInput("")
  const [formError, setFormError] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setFormError("")

    const result = employeeService.createEmployee({
      firstName: firstName.value,
      lastName: lastName.value,
      department: department.value
    })

    if (!result.success) {
      setFormError(result.message)
      return
    }

    setEmployees(result.employees)

    firstName.setValue("")
    lastName.setValue("")
    department.setValue("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Employee</h3>

      {formError && <p style={{ color: "red" }}>{formError}</p>}

      <input
        type="text"
        placeholder="First Name"
        value={firstName.value}
        onChange={firstName.onChange}
      />

      <input
        type="text"
        placeholder="Last Name"
        value={lastName.value}
        onChange={lastName.onChange}
      />

      <select
        value={department.value}
        onChange={department.onChange}
      >
        <option value="">Select Department</option>
        {employeeRepo.getDepartments().map(dep => (
          <option key={dep} value={dep}>
            {dep}
          </option>
        ))}
      </select>

      <button type="submit">Add Employee</button>
    </form>
  )
}