import { useQuery } from "@tanstack/react-query"
import { employeeRepository } from "../repositories/employeeRepository"
import { EmployeeList } from "../components/EmployeeList"
import { EmployeeForm } from "../components/EmployeeForm"

export function EmployeesPage() {
  const { data: employees = [], isLoading } = useQuery({
    queryKey: ["employees"],
    queryFn: () => employeeRepository.getEmployees()
  })

  if (isLoading) return <p>Loading...</p>

  return (
    <>
      <EmployeeList employees={employees} />
      <EmployeeForm />
    </>
  )
}