import { EmployeeList } from "../components/EmployeeList"
import { EmployeeForm } from "../components/EmployeeForm"

type Props = {
  employees: any[]
  setEmployees: (employees: any[]) => void
}

export function EmployeesPage({ employees, setEmployees }: Props) {
  return (
    <>
      <EmployeeList employees={employees} />
      <EmployeeForm setEmployees={setEmployees} />
    </>
  )
}