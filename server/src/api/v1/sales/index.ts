import express from 'express';
import { Router } from 'express';
import getSales from './sales.ctrl/getSales'
import postSales from './sales.ctrl/postSales'
import deleteSales from './sales.ctrl/deleteSales'
import multer from 'multer'
import path from 'path'

const upload = multer({dest: './public'})

const router = Router();

router.get('/getsales', getSales);
//router.use('/public', express.static(path.join(__dirname, '../public')));
//router.use('/image', express.static('./public'));
router.post('/postsales', postSales);
router.delete('/getsales/:id', deleteSales);

export default router;