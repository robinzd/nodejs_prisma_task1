import { PrismaClient, cart_table, save_cart_totalprice } from "@prisma/client";
import { idText, visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
const prisma = new PrismaClient();
export const GetCartPrice = async (req: any, res: any) => {
  //req.body  //-------------> Has all request data
  var message_me = req.body.message;
  const getcartprice = await prisma.cart_table.findMany({
    select: {
      product_price_cart: true,
    },
  });
  var total = 0;
  var total_count = getcartprice.map(function (e, i) {
    total += e.product_price_cart;
  });
  res.status(200).json({data:total});
  let get_count: any = await prisma.save_cart_totalprice.aggregate({
    _count: {
      save_cart_totalprice: true,
    },
  });
  var final_count = get_count._count.save_cart_totalprice;
  if (final_count == 0) {
    const create_cartprice = await prisma.save_cart_totalprice.create({
      data:{
        save_cart_totalprice: total,
      },
    });
  } else {
    let update: any = await prisma.save_cart_totalprice.updateMany({
      data:{
        save_cart_totalprice: total,
      },
    });
  }
};
