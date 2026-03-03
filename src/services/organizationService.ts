import { organizationRepo } from "../repositories/organizationRepo"

export const organizationService = {
  createRole(data: {
    firstName: string
    lastName: string
    role: string
  }) {
    if (data.firstName.trim().length < 3) {
      return { success: false, message: "First name must be at least 3 characters." }
    }

    const existing = organizationRepo
      .getRoles()
      .find(r => r.role === data.role)

    if (existing) {
      return { success: false, message: "This role is already occupied." }
    }

    const updated = organizationRepo.createRole(data)

    return { success: true, roles: updated }
  }
}