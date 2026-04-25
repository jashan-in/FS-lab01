import { Routes, Route, Navigate } from "react-router-dom"
import { EmployeesPage } from "./pages/EmployeesPage"
import { OrganizationPage } from "./pages/OrganizationPage"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { NavBar } from "./components/NavBar"

function App() {
  return (
    <>
      <Header />
      <NavBar />

      <Routes>
        <Route path="/" element={<Navigate to="/employees" />} />

        <Route
          path="/employees"
          element={<EmployeesPage />}
        />

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