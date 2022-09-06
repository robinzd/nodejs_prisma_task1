import {
    PrismaClient,
    customer_tbl,orders_tbl,customer_agedetails,deliver_status
  } from "@prisma/client";
  import { visitFunctionBody } from "typescript";
  import { isGeneratorFunction } from "util/types";
  // import Crypto from 'crypto-js'
  // import { jwtManager } from '../utils/tokens-helper'
  // import { GetDate } from '../utils/date-helper'
  // import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
  const prisma = new PrismaClient();
  export const Distinct = async (req: any, res: any) => {
    //     //req.body  //-------------> Has all request data
    const distinctScores = await prisma.customer_tbl.findMany({
        distinct: ['customer_first_name','customer_last_name'],
        orderBy: {
          customer_first_name:'desc'
        },
        select: {
          customer_first_name: true,
          customer_last_name:true,
          orders_tbl:{
          select:{
            product_name:true,
          }
          },
          deliver_status: {
            select: {
              product_status: true,
            },
          },
          customer_agedetails: {
            select: {
              customer_age: true,
              customer_id:true,
            },
          },
        },
      })
    res
      .status(200)
      .json({ Result: "Calculation Of The Ages", datas:distinctScores});
};