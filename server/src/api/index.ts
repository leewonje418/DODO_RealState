import { Router } from "express";
import customers from "./customers.ctrl/customers";
const router = Router();

router.get('/customers', customers);
export default router;