import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Sales from '../../../../entity/Sales'
import logger from '../../../../lib/logger';
export default async (req: Request, res: Response) => {
    // const { image, name, transaction_type, market_price, area, address } = req.body;
    let { file, name, transaction_type, market_price, area, address, like } = req.body;
    try {
        const salesRepo = getRepository(Sales);
        let image = '/image/' + req.file.filename;
        salesRepo.save({
            image,
            name, 
            transaction_type, 
            market_price, 
            area, 
            address, 
            like
        });
        res.send(req.body);
    } catch (error) {
        logger.red('server error!', error);
    }
}