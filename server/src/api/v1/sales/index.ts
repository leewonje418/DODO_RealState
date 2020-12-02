import express from 'express';
import { Router } from 'express';
import getSales from './sales.ctrl/getSales'
import postSales from './sales.ctrl/postSales'
import deleteSales from './sales.ctrl/deleteSales'
import multer from 'multer'

const upload = multer({dest: './upload'})

const router = Router();

router.get('/getsales', getSales);
router.use('/image', express.static('./upload'));
router.post('/getsales', upload.single('image'), postSales);
router.delete('/getsales/:id', deleteSales);

export default router;