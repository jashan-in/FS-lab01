import { useState } from "react"
import { organizationRepo } from "../repositories/organizationRepo"
import { OrganizationForm } from "../components/OrganizationForm"

export function OrganizationPage() {
  const [roles, setRoles] = useState(
    organizationRepo.getRoles()
  )

  return (
    <>
      <ul>
        {roles.map((r, index) => (
          <li key={index}>
            {r.firstName} {r.lastName} — {r.role}
          </li>
        ))}
      </ul>

      <OrganizationForm setRoles={setRoles} />
    </>
  )
}