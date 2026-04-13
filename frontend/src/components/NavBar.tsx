import { Link } from "react-router-dom"
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/clerk-react"

export function NavBar() {
  return (
    <nav style={{ marginBottom: "1rem" }}>
      <Link to="/employees">Employees</Link> |{" "}
      <Link to="/organization">Organization</Link> |{" "}

      {/* Auth UI */}
      <SignedOut>
        <SignInButton mode="modal">
          <button>Login</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  )
}