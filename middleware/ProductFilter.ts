import {
  PrismaClient,
  orders_tbl,
  customer_tbl,
  deliver_status,
} from "@prisma/client";
import { mainModule } from "process";
import { visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
const prisma = new PrismaClient();
export const FilterProductDetails = async (req: any, res: any) => {
  //     //req.body  //-------------> Has all request data
  // By unique identifier
  // Returns an object or null
  const email = req.body.email;
  const name1 = req.body.name1;
  const name2 = req.body.name2;
  const result = await prisma.customer_tbl.findMany({
    where: {
      Email_id: {
        endsWith: email,
      },
      orders_tbl: {
        some: {
          product_name: name1,
        },
      },
    },
    include: {
      orders_tbl: {
        where: {
          product_name: name2,
        },
      },
    },
  });

  let data = {
    datasadd: JSON.stringify(result, (_, v) =>
      typeof v === "bigint" ? v.toString() : v
    ),
  };
  data = JSON.parse(data.datasadd);

  res.status(200).json({ Result: "Filtered Product Details", data: data });
};
