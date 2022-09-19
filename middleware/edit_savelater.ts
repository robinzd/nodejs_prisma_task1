import { PrismaClient,save_later_table } from "@prisma/client";
import { idText, visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
const prisma = new PrismaClient();
export const UpdateSaveLater = async (req: any, res: any) => {
  //req.body  //-------------> Has all request data
  var id = req.body.id;
  var product_price = req.body.product_price_cart;
  var product_quantity = req.body.product_quantity_cart;
  console.log(product_quantity);
  if(product_quantity > 0){
    const updatesavelater = await prisma.save_later_table.update({
     where:{
        id:id,
     },
      data: {
        product_price_cart: parseInt(product_price),
        product_quantity_cart: parseInt(product_quantity),
      },
    });
    var final=updatesavelater.product_price_cart
    res
      .status(200)
      .json({data:final});
  }
  else if(product_quantity < 1){
    const update_delete_savelater = await prisma.save_later_table.delete({
      where: {
        id: parseInt(id),
      },
    });
    res
    .status(400)
    .json({Result: "Deleted Successfully"});
  }
};
