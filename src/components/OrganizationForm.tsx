import { useState } from "react"
import { useFormInput } from "../hooks/useFormInput"
import { organizationService } from "../services/organizationService"

type Props = {
  setRoles: (roles: any[]) => void
}

export function OrganizationForm({ setRoles }: Props) {
  const firstName = useFormInput("")
  const lastName = useFormInput("")
  const role = useFormInput("")
  const [error, setError] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")

    const result = organizationService.createRole({
      firstName: firstName.value,
      lastName: lastName.value,
      role: role.value
    })

    if (!result.success) {
      setError(result.message)
      return
    }

    setRoles(result.roles)

    firstName.setValue("")
    lastName.setValue("")
    role.setValue("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Role</h3>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        placeholder="First Name"
        value={firstName.value}
        onChange={firstName.onChange}
      />

      <input
        placeholder="Last Name"
        value={lastName.value}
        onChange={lastName.onChange}
      />

      <input
        placeholder="Role"
        value={role.value}
        onChange={role.onChange}
      />

      <button type="submit">Add Role</button>
    </form>
  )
}