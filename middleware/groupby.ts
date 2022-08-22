import {
    PrismaClient,
    customer_agedetails
  } from "@prisma/client";
  import { visitFunctionBody } from "typescript";
  import { isGeneratorFunction } from "util/types";
  // import Crypto from 'crypto-js'
  // import { jwtManager } from '../utils/tokens-helper'
  // import { GetDate } from '../utils/date-helper'
  // import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
  const prisma = new PrismaClient();
  export const IdGroupBy = async (req: any, res: any) => {
    //     //req.body  //-------------> Has all request data
    const groupUsers = await prisma.customer_agedetails.groupBy({
        by: ['customer_id'],
        _sum: {
           ID: true,
        },
        orderBy: {
            customer_id: 'desc',
          },
    })
    res
      .status(200)
      .json({ Result: "Calculation Of The Ages", datas:groupUsers});
};