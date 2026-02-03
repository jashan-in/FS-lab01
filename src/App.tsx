import { useState } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { NavBar } from "./components/NavBar"
import { EmployeesPage } from "./pages/EmployeesPage"
import { OrganizationPage } from "./pages/OrganizationPage"
import { employees } from "./data/employees"

function App() {
  const [employeeList] = useState(employees)

  return (
    <>
      <Header />
      <NavBar />

      <Routes>
        <Route path="/" element={<Navigate to="/employees" />} />
        <Route
          path="/employees"
          element={<EmployeesPage employees={employeeList} />}
        />
        <Route path="/organization" element={<OrganizationPage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
