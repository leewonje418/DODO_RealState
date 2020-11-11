import { Router } from 'express';
import getSales from './sales.ctrl/getSales'

const router = Router();

router.get('/getsales', getSales);

export default router;