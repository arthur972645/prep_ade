import { Router } from "express";
import { create } from "../controllers/publicaoControllers.js"

const router = Router()

router.post("/", create)

export default router