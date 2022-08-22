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
export const FilterOrder = async (req: any, res: any) => {
  //     //req.body  //-------------> Has all request data
  // By unique identifier
  // Returns an object or null
  const usersWithname = await prisma.customer_tbl.findMany({
    orderBy: [
      {
        Email_id: "desc",
      },
    ],
    include: {
      orders_tbl: {
        orderBy: {
          product_name: "desc",
        },
        select: {
          product_name: true,
        },
      },
    },
  });

  let data = {
    datasadd: JSON.stringify(usersWithname, (_, v) =>
      typeof v === "bigint" ? v.toString() : v
    ),
  };
  data = JSON.parse(data.datasadd);

  res
    .status(200)
    .json({ Result: "Filtered Products Details By order", data: data });
};
