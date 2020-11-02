import { Router } from "express";
import sales from "./sales.ctrl/sales";
const router = Router();

router.get('/sales', sales);
export default router;