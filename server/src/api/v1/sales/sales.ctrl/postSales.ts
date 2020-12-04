import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Sales from '../../../../entity/Sales'
import logger from '../../../../lib/logger';
export default async (req: Request, res: Response) => {
    // const { image, name, transaction_type, market_price, area, address } = req.body;
    console.log(req);
    let { file, name, transaction_type, market_price, area, address, like } = req.body;
    try {
        const salesRepo = getRepository(Sales);
        let image = file;
        await salesRepo.save({
            image,
            name, 
            transaction_type, 
            market_price, 
            area, 
            address, 
            like
        });
        res.status(200).json({
            stauts: 200,
            message: "success",
        });
    } catch (error) {
        logger.red('server error!', error);
    }
}