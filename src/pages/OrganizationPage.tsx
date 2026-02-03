import { OrganizationList } from "../components/OrganizationList"
import { organizationData } from "../data/organization"

export function OrganizationPage() {
  return <OrganizationList roles={organizationData} />
}
