import {
  PrismaClient,
  cart_table
} from "@prisma/client";
import { idText, visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
const prisma = new PrismaClient();
export const AddCart = async (req: any, res: any) => {
  //     //req.body  //-------------> Has all request data
  var productid = req.body.product_id;
  var productquantity = req.body.product_quantity_cart;
  var productprice = req.body.product_price_cart;
  var productname = req.body.product_name;
  var productimage = req.body.product_image;
  let addcart: any = await prisma.cart_table.create({
    data: {
      product_id: productid,
      product_price_cart: parseInt(productprice),
      product_name: productname,
      product_quantity_cart: productquantity,
      product_image: productimage,
    },
  });
  res.status(200).json({ Result: "Successfully Product Added To The Cart"});
};
