import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Sales from '../../../../entity/Sales'
import logger from '../../../../lib/logger';
export default async (req: Request, res: Response) => {
    try {
        const salesRepo = getRepository(Sales);
        const id = req.params.id;
        const sales : Sales = await salesRepo.findOne({
            where : {
                id
            }
        })
        sales.isDeleted = true;
        // console.log(sales);
        await salesRepo.save(sales);
        res.send(sales);
    } catch (error) {
        logger.red('server error!', error);
    }
}