import { PrismaClient,cart_table} from "@prisma/client";
import { idText, visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
const prisma = new PrismaClient();
export const GetCartPrice = async (req: any, res: any) => {
  //req.body  //-------------> Has all request data
const getcartprice = await prisma.cart_table.findMany({
   select:{
    product_price_cart:true,
   }
})
res.status(200).json({ Result:"Price Result",data:getcartprice});
};


