import { PrismaClient,product_table} from "@prisma/client";
import { visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
const prisma = new PrismaClient();
export const Products = async (req: any, res: any) => {
  //     //req.body  //-------------> Has all request data
  // By unique identifier
  // Returns an object or null
const getproducts = await prisma.product_table.findMany({
});

  res
    .status(200)
    .json({ Result: "Product Details", datas:getproducts});

};
