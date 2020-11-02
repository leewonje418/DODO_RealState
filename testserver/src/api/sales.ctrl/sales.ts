import { Request, Response } from "express";
export default async (req: Request, res: Response) => {
    //id, image, name, transaction_type, address, like
    res.send([
        {
            'id' : 1,
            'image' : 'https://placeimg.com/64/64/1',
            'name' : '홍길동',
            'transaction_type' : '962222',
            'market_price' : 'dfdfdfdf',
            'address' : '남자',
            'like' : '대학생'
          },
          {
            'id' : 2,
            'image' : 'https://placeimg.com/64/64/2',
            'name' : '이원제',
            'birthday' : '962222',
            'gender' : '남자',
            'job' : '고등학생'
          },
          {
            'id' : 3,
            'image' : 'https://placeimg.com/64/64/3',
            'name' : '나동빈',
            'birthday' : '962222',
            'gender' : '남자',
            'job' : '대학생'
          }
    ])
}