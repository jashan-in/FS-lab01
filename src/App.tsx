import { useState } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { employeeRepo } from "./repositories/employeeRepo"
import { EmployeesPage } from "./pages/EmployeesPage"
import { OrganizationPage } from "./pages/OrganizationPage"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { NavBar } from "./components/NavBar"

function App() {
  const [employeeList, setEmployeeList] = useState(
    employeeRepo.getEmployees()
  )

  return (
    <>
      <Header />
      <NavBar />

      <Routes>
        {/* Redirect root to employees */}
        <Route path="/" element={<Navigate to="/employees" />} />

        {/* Employees page */}
        <Route
          path="/employees"
          element={
            <EmployeesPage
              employees={employeeList}
              setEmployees={setEmployeeList}
            />
          }
        />

        {/* Organization page */}
        <Route
          path="/organization"
          element={<OrganizationPage />}
        />
      </Routes>

      <Footer />
    </>
  )
}

export default App