import { Router } from "express"
import { requireAuth } from "@clerk/express"
import { organizationController } from "../controllers/organizationController"

const router = Router()

router.get("/", organizationController.getRoles)
export default router