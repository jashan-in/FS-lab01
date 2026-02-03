import { EmployeeList } from "../components/EmployeeList"

type Props = {
  employees: any[]
}

export function EmployeesPage({ employees }: Props) {
  return <EmployeeList employees={employees} />
}
