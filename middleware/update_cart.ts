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
    var final=updatecart.product_price_cart;
    res
      .status(200)
      .json({data:final});
  }
  else if(product_quantity < 1){
    const update_delete_cart = await prisma.cart_table.delete({
      where: {
        product_id: parseInt(product_id),
      },
    });
    res
    .status(400)
    .json({Result: "Deleted Successfully"});
  }
};
