import { useState } from "react"
import { Header } from "./components/Header"
import { EmployeeList } from "./components/EmployeeList"
import { EmployeeForm } from "./components/EmployeeForm"
import { Footer } from "./components/Footer"
import { employeesData } from "./data/employees"

function App() {
  const [employees, setEmployees] = useState(employeesData)

  return (
    <>
      <Header />
      <EmployeeList employees={employees} />
      <EmployeeForm employees={employees} setEmployees={setEmployees} />
      <Footer />
    </>
  )
}

export default App
