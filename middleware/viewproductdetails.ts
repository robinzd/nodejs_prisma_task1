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
  export const ProductDetailsview = async (req: any, res: any) => {
    //     //req.body  //-------------> Has all request data
    const mail = req.body.email_id;
    const allUsers = await prisma.customer_tbl.findMany({
      where:{
          Email_id:mail,
      },
      include: {
        orders_tbl: true,
        deliver_status: true,
      },
    });
res
      .status(200)
      .json({ Result: "Product Details For All The Users",datas1:allUsers});
  };
  