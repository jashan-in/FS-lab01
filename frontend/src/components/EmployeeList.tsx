type Props = {
  employees: {
    firstName: string
    lastName: string
    department: string
  }[]
}

export function EmployeeList({ employees }: Props) {
  const departments = Array.from(
    new Set(employees.map(emp => emp.department))
  )

  return (
    <main>
      {departments.map(dept => (
        <section key={dept}>
          <h2>{dept}</h2>
          <ul>
            {employees
              .filter(emp => emp.department === dept)
              .map((emp, index) => (
                <li key={index}>
                  {emp.firstName} {emp.lastName}
                </li>
              ))}
          </ul>
        </section>
      ))}
    </main>
  )
}
