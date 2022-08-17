import {
  PrismaClient,
  customer_tbl,
  orders_tbl,
  deliver_status,
} from "@prisma/client";
import { visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
const prisma = new PrismaClient();
export const ProductDetails = async (req: any, res: any) => {
  //     //req.body  //-------------> Has all request data
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const mail = req.body.email_id;
  const status = req.body.status;
  const product_name = req.body.product_name;

  let details = await prisma.customer_tbl.create({
    data: {
      customer_first_name: first_name,
      customer_last_name: last_name,
      Email_id: mail,
      orders_tbl: {
        create: {product_name: product_name},
      },
      deliver_status: {
        create: { status: status },
      },
    },
  });

  res
    .status(200)
    .json({ Result: "Product Details", datas:details, request: req.body});


  // to view the join result in the console//
  // const allUsers = await prisma.customer_tbl.findMany({
  //   include: {
  //     orders_tbl: true,
  //     deliver_status: true,
  //   },
  // });
  // console.dir(allUsers, {depth: null});
  // *******************************************************************//

};
