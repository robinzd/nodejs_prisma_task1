import {
  PrismaClient,
  customer_tbl,
  orders_tbl,
  deliver_status,
  status
} from "@prisma/client";
import { visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
const prisma = new PrismaClient();
export const ProductDetailsview = async (req: any, res: any) => {
  //     //req.body  //-------------> Has all request data
  const allUsers = await prisma.customer_tbl.findMany({
    include: {
      orders_tbl: true,
      deliver_status: true,
    },
  });
 
console.log(allUsers);

  var final_result = allUsers.map(function (element, iterator) {
    var result = {
      ID: element.ID,
      customer_first_name: element.customer_first_name,
      customer_last_name: element.customer_last_name,
      Email_id: element.Email_id,
      product_id: element.orders_tbl[0].product_id,
      product_name: element.orders_tbl[0].product_name,
      product_price: element.orders_tbl[0].product_price,
      deliver_id: element.deliver_status[0].deliver_id,
      deliver_status: element.deliver_status[0].product_status,
    };
  return result;
  });
  res
    .status(200)
    .json({ Result: "Product Details For All The Users",data:final_result});
};


