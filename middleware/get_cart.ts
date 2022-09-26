import { PrismaClient,cart_table,product_table} from "@prisma/client";
import { idText, visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
const prisma = new PrismaClient();
export const GetCart = async (req: any, res: any) => {
  //req.body  //-------------> Has all request data
const getprice = await prisma.cart_table.findMany({
   include:{
    product_table:true,
  }
})
var result=getprice.map(function(e,i){
  var final_result={
   id:e.id,
   product_id:e.product_id,
   product_image:e.product_image,
   product_name:e.product_name,
   product_price:e.product_price_cart,
   product_quantity:e.product_quantity_cart,
   product_original_price:e.product_table.product_price,
  }
  return final_result;
})
res.status(200).json({ Result:"Cart Details",data:result});
};


