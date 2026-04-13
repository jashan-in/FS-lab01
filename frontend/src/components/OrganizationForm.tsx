import { useState } from "react"
import { organizationRepo } from "../repositories/organizationRepo"
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react"

type Props = {
  setRoles: (roles: string[]) => void
}

export function OrganizationForm({ setRoles }: Props) {
  const [roleName, setRoleName] = useState("")
  const [formError, setFormError] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setFormError("")

    if (!roleName || roleName.trim().length < 2) {
      setFormError("Role name must be at least 2 characters")
      return
    }

    try {
      // assuming backend POST /api/roles exists
      const res = await fetch("http://localhost:3000/api/roles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: roleName })
      })

      const data = await res.json()

      // reload roles from backend
      const roles = await organizationRepo.getDepartments()
      setRoles(roles)

      setRoleName("")
    } catch (error: any) {
      setFormError(error.message)
    }
  }

  return (
    <>
      <SignedOut>
        <p>
          Please <SignInButton mode="modal">login</SignInButton> to add roles
        </p>
      </SignedOut>

      <SignedIn>
        <form onSubmit={handleSubmit}>
          <h3>Add Role</h3>

          {formError && <p style={{ color: "red" }}>{formError}</p>}

          <input
            type="text"
            placeholder="Role Name"
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
          />

          <button type="submit">Add Role</button>
        </form>
      </SignedIn>
    </>
  )
}