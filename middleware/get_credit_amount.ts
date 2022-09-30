import { PrismaClient, cart_table, save_cart_totalprice } from "@prisma/client";
import { idText, visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
const prisma = new PrismaClient();
export const GetCredit = async (req: any, res: any) =>{
  //req.body  //-------------> Has all request data
  const get_creditamount:any = await prisma.credit_table.findMany({
    select:{
      credit_balance:true,
  }
})
res.status(200).json({data:get_creditamount});
};
