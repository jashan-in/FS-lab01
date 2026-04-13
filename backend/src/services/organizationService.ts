import { organizationRepository } from "../repositories/organizationRepository"

export const organizationService = {
  async getRoles() {
    return await organizationRepository.getRoles()
  }
}