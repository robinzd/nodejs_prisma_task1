import { PrismaClient, cart_table } from "@prisma/client";
import { idText, visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
const prisma = new PrismaClient();
export const CartCount = async (req: any, res: any) => {
  //req.body  //-------------> Has all request data
  const cartcount = await prisma.cart_table.aggregate({
    _count: {
      product_id: true,
    },
  });
  var final_result = cartcount._count.product_id;
  res.status(200).json({ data: final_result });
};
