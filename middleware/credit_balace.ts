import { PrismaClient,save_cart_totalprice} from "@prisma/client";
import { idText, visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
const prisma = new PrismaClient();
export const GetCreditBalace = async (req: any, res: any) => {
  //req.body  //-------------> Has all request data
const getcreditbalance:any = await prisma.credit_table.findMany({
      select:{
        credit_balance:true,
    }
})
const getcartprice:any = await prisma.save_cart_totalprice.findMany({
      select:{
        save_cart_totalprice:true,
      }
})
console.log(getcartprice);
res.status(200).json({data1:getcreditbalance,price:getcartprice});
};






