import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Sales from '../../../../entity/Sales'
import logger from '../../../../lib/logger';
export default async (req: Request, res: Response) => {
    try {
        const salesRepo = getRepository(Sales);
        const sales: Sales[] = await salesRepo.find({
            where: {
                isDeleted: false
            },
            order: {
                id: 'DESC'
            }
        });
        res.send(sales);
    } catch (error) {
        logger.red('server error!', error);
    }
}