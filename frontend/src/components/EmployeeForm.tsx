import { useState, useEffect } from "react"
import { useFormInput } from "../hooks/useFormInput"
import { employeeRepository } from "../repositories/employeeRepository"
import { SignedIn, SignedOut, SignInButton, useAuth } from "@clerk/clerk-react"

type Props = {
  setEmployees: (employees: any[]) => void
}

export function EmployeeForm({ setEmployees }: Props) {
  const firstName = useFormInput("")
  const lastName = useFormInput("")
  const department = useFormInput("")
  const [formError, setFormError] = useState("")
  const [departments, setDepartments] = useState<string[]>([])

  const { getToken } = useAuth()

  useEffect(() => {
    employeeRepository.getDepartments().then(setDepartments)
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setFormError("")

    try {
      const token = await getToken()

      const res = await fetch("http://localhost:3000/api/employees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          firstName: firstName.value,
          lastName: lastName.value,
          department: department.value
        })
      })

      if (!res.ok) {
        const text = await res.text()
        throw new Error(text)
      }

      const employees = await res.json()
      setEmployees(employees)

      firstName.setValue("")
      lastName.setValue("")
      department.setValue("")
    } catch (error: any) {
      setFormError(error.message)
    }
  }

  return (
    <>
      <SignedOut>
        <p>
          Please <SignInButton mode="modal">login</SignInButton> to add employees
        </p>
      </SignedOut>

      <SignedIn>
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

          <select value={department.value} onChange={department.onChange}>
            <option value="">Select Department</option>
            {departments.map(dep => (
              <option key={dep} value={dep}>
                {dep}
              </option>
            ))}
          </select>

          <button type="submit">Add Employee</button>
        </form>
      </SignedIn>
    </>
  )
}