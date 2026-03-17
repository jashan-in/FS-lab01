import { Link } from "react-router-dom"

export function NavBar() {
  return (
    <nav style={{ marginBottom: "1rem" }}>
      <Link to="/employees">Employees</Link> |{" "}
      <Link to="/organization">Organization</Link>
    </nav>
  )
}
