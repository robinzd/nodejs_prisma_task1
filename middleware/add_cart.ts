import { PrismaClient, customer_tbl, orders_tbl } from "@prisma/client";
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
  console.log(productid);
  var productquantity=req.body.product_quantity;
  console.log(productquantity);
  var productprice =req.body.product_price;
  console.log(productprice);
  var productname=req.body.product_name;
  console.log(productname);
  var total=Number(productquantity)*Number(productprice)
  let addcart: any = await prisma.cart_table.create({
    data: {
      product_id: productid,
      product_price:Number(total),
      product_name: productname,
      product_quantity:productquantity,
    },
  });
  res
    .status(200)
    .json({ Result: "Successfully Product Added To The Cart", data1:addcart});
};
