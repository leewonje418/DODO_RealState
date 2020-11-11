import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Sales from '../../../../entity/Sales'
export default async (req: Request, res: Response) => {
    try {
        const salesRepo = getRepository(Sales);
        const sales: Sales[] = await salesRepo.find({
            order: {
                idx: 'DESC'
            }
        });
        console.log(sales);
        res.send(sales);
    } catch (error) {
        
    }
}