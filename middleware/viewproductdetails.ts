import {
    PrismaClient,
    customer_tbl,
    orders_tbl,
    deliver_status,customer_agedetails
  } from "@prisma/client";
  import { visitFunctionBody } from "typescript";
  import { isGeneratorFunction } from "util/types";
  // import Crypto from 'crypto-js'
  // import { jwtManager } from '../utils/tokens-helper'
  // import { GetDate } from '../utils/date-helper'
  // import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
  const prisma = new PrismaClient();
  export const ProductDetailsview = async (req: any, res: any) =>{
    //     //req.body  //-------------> Has all request data
    const allUsers = await prisma.customer_tbl.findMany({
      include: {
        orders_tbl: true,
        deliver_status: true,
      },
      
    });
res
      .status(200)
      .json({ Result: "Product Details For All The Users",data:allUsers});
  };
  