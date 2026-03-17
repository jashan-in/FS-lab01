import { useState, useEffect } from "react"
import { useFormInput } from "../hooks/useFormInput"
import { employeeRepository } from "../repositories/employeeRepository"

type Props = {
  setEmployees: (employees: any[]) => void
}

export function EmployeeForm({ setEmployees }: Props) {
  const firstName = useFormInput("")
  const lastName = useFormInput("")
  const department = useFormInput("")
  const [formError, setFormError] = useState("")
  const [departments, setDepartments] = useState<string[]>([])

  useEffect(() => {
    employeeRepository.getDepartments().then(setDepartments)
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setFormError("")

    try {
      const employees = await employeeRepository.createEmployee({
        firstName: firstName.value,
        lastName: lastName.value,
        department: department.value
      })

      setEmployees(employees)

      firstName.setValue("")
      lastName.setValue("")
      department.setValue("")
    } catch (error: any) {
      setFormError(error.message)
    }
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
        {departments.map(dep => (
          <option key={dep} value={dep}>
            {dep}
          </option>
        ))}
      </select>

      <button type="submit">Add Employee</button>
    </form>
  )
}