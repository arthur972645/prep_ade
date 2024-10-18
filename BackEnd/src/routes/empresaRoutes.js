import { Router } from "express";
import { create } from "../controllers/empresaControllers.js"

const router = Router()

router.post("/", create)

export default router