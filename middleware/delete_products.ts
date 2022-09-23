import { PrismaClient,cart_table } from "@prisma/client";
import { visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
const prisma = new PrismaClient();
export const DeleteProducts = async (req: any, res: any) => {
  //     //req.body  //-------------> Has all request data
  var product_id=req.body.product_id;
  console.log(product_id);
  const deleteproducts = await prisma.cart_table.delete({
    where: {
      product_id:product_id,
    },
 })
if(deleteproducts){
    res.status(200).json({Result: "Product Deleted Successfully"});
  }
  else{
    res.status(400).json({Result: "Something Went Wrong"});
  }
};
