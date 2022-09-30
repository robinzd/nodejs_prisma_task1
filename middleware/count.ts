import {
    PrismaClient,
    orders_tbl,customer_tbl
  } from "@prisma/client";
  import { visitFunctionBody } from "typescript";
  import { isGeneratorFunction } from "util/types";
  // import Crypto from 'crypto-js'
  // import { jwtManager } from '../utils/tokens-helper'
  // import { GetDate } from '../utils/date-helper'
  // import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
  const prisma = new PrismaClient();
  export const Count = async (req: any, res: any) => {
    //     //req.body  //-------------> Has all request data
    const usersWithCount = await prisma.customer_tbl.findMany({
        include: {
          _count: {
            select: {orders_tbl:true},
          },
        },
      });
    res
      .status(200)
      .json({ Result: "Calculation Of The Ages", datas:usersWithCount});
};