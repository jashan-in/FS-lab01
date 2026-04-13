import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const employeeRepository = {
  async getEmployees() {
    return prisma.employee.findMany({
      include: { role: true }
    })
  },

  async createEmployee(data: {
    firstName: string
    lastName: string
    department: string
  }) {
    const role = await prisma.role.findFirst({
      where: { name: data.department }
    })

    if (!role) throw new Error("Invalid department")

    const employee = await prisma.employee.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        roleId: role.id
      }
    })

    return prisma.employee.findMany({
      include: { role: true }
    })
  },

  async getDepartments() {
    const roles = await prisma.role.findMany()
    return roles.map(r => r.name)
  }
}