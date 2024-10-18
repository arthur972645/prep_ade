import { Router } from "express";
import { create } from "../controllers/usuarioControllers.js"

const router = Router()

router.post("/", create)

export default router