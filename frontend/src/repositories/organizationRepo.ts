export const organizationRepo = {
  async getDepartments() {
    const res = await fetch("http://localhost:3000/api/roles")
    const roles = await res.json()

    // FIX: convert objects → string array
    return roles.map((r: any) => r.name)
  }
}