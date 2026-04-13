import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  // create roles
  const admin = await prisma.role.create({
    data: { name: "Administration" }
  })

  const audit = await prisma.role.create({
    data: { name: "Audit" }
  })

  const banking = await prisma.role.create({
    data: { name: "Banking Operations" }
  })

  // create employees
  await prisma.employee.createMany({
    data: [
      { firstName: "Zoë", lastName: "Robins", roleId: admin.id },
      { firstName: "Madeleine", lastName: "Madden", roleId: admin.id },
      { firstName: "Josha", lastName: "Sadowski", roleId: audit.id },
      { firstName: "Kate", lastName: "Fleetwood", roleId: audit.id },
      { firstName: "Priyanka", lastName: "Bose", roleId: banking.id },
      { firstName: "Álvaro", lastName: "Morte", roleId: banking.id }
    ]
  })
}

main()
  .then(() => console.log("Seeded successfully"))
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect())