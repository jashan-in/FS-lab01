import { organizationData } from "../data/organization"

let roles = [...organizationData]

export const organizationRepo = {
  getRoles() {
    return roles
  },

  createRole(role: {
    firstName: string
    lastName: string
    role: string
  }) {
    roles = [...roles, role]
    return roles
  }
}