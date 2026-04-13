import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const organizationRepository = {
  async getRoles() {
    return prisma.role.findMany()
  }
}