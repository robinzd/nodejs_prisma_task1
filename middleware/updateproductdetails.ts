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
export const UpdateProductDetails = async (req: any, res: any) => {
  //     //req.body  //-------------> Has all request data
  var customer_id = req.body.ID;
  console.log(customer_id);
  var name = req.body.product_name;
  console.log(name);
  var status = req.body.status;
  console.log(status);
  const updatedetails = await prisma.customer_tbl.update({
    where: {
      ID: parseInt(customer_id),
    },
    data: {
      orders_tbl: {
        update: {
          where: {
            product_id: parseInt(customer_id),
          },
          data: {
            product_name: name,
          },
        },
      },
      deliver_status: {
        update: {
          where: {
            deliver_id: parseInt(customer_id),
          },
          data: {
            product_status: status,
          },
        },
      },
    },
});

console.log(updatedetails);

if (updatedetails) {
    res.status(200).json({
      Result: "Product Details Updated Succesfully",
    });
  } else {
    res.status(400).json({Result: "Product Details Cannot Be Updated"});
  }
};
