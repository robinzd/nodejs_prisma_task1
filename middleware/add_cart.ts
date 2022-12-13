import { PrismaClient, cart_table, save_later_table } from "@prisma/client";
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
  let findcart: any = await prisma.cart_table.findFirst({
    where: {
      product_id: productid,
    },
  });
  let findsavelater: any = await prisma.save_later_table.findFirst({
    where: {
      product_id: productid,
    },
  });
  if (findcart) {
    res.status(400).json({ Result1: "Product Has Been Already Added To The Cart" });
  } else if (findsavelater) {
    res.status(400).json({ Result2: "Product Has Been Already Added To The Save Later" });
  } else {
    let addcart: any = await prisma.cart_table.create({
      data: {
        product_id: productid,
        product_price_cart: parseInt(productprice),
        product_name: productname,
        product_quantity_cart: productquantity,
        product_image: productimage,
      },
    });
    res.status(200).json({Result: "Successfully Product Added To The Cart" });
  }
};
