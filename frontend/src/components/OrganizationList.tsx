type Role = {
  name: string
  title: string
}

type Props = {
  roles: Role[]
}

export function OrganizationList({ roles }: Props) {
  return (
    <ul>
      {roles.map((role, index) => (
        <li key={index}>
          {role.name} — {role.title}
        </li>
      ))}
    </ul>
  )
}
