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
  export const CustomerAge = async (req: any, res: any) => {
    //     //req.body  //-------------> Has all request data
    const aggregations = await prisma.customer_agedetails.aggregate({
      _avg: {
        customer_age: true,
      },
      _count: {
        customer_age: true,
      },
    })
    res
      .status(200)
      .json({ Result: "Calculation Of The Ages", datas:aggregations});
};