import { Router } from 'express';
import getSales from './sales.ctrl/getSales'

const router = Router();

router.post('/getsales', getSales);

export default router;