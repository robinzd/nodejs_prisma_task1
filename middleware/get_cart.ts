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
const getprice = await prisma.product_table.findMany({
   include:{
    cart_table:true,
  }
})
var result=getprice.map(function (e,i){
  var final_result={
    product_id:e.product_id,
    product_image:e.product_image,
    product_name:e.product_name,
    product_price:e.product_price,
    product_id_cart:e.cart_table?.product_id,
    product_price_cart:e.cart_table?.product_price_cart,
    product_quantity_cart:e.cart_table?.product_quantity_cart,
  }
  return final_result;
})
console.log(result);
res.status(200).json({ Result:"Cart Details",data:result});
};


