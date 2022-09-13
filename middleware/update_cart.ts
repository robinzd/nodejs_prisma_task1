import { PrismaClient, cart_table } from "@prisma/client";
import { idText, visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
const prisma = new PrismaClient();
export const UpdateCart = async (req: any, res: any) => {
  //req.body  //-------------> Has all request data
  var product_id = req.body.product_id;
  var product_price = req.body.product_price_cart;
  var product_quantity = req.body.product_quantity_cart;
  console.log(product_quantity);
  if(product_quantity > 0){
    const updatecart = await prisma.cart_table.update({
      where: {
        product_id: parseInt(product_id),
      },
      data: {
        product_price_cart: parseInt(product_price),
        product_quantity_cart: parseInt(product_quantity),
      },
    });
    res
      .status(200)
      .json({Result: "Cart Updated Successfully"});
  }
  else{
    res
    .status(400)
    .json({Result: "something Went Wrong"});
  }
};
