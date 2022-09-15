import { PrismaClient,save_later_table} from "@prisma/client";
import { idText, visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
const prisma = new PrismaClient();
export const SaveLater = async (req: any, res: any) => {
  //req.body  //-------------> Has all request data
  var product_id=req.body.product_id;
  var product_image=req.body.product_image;
  var product_name=req.body.product_name;
  var product_price=req.body.product_price_cart;
  var product_quantity=req.body.product_quantity_cart;
const save_later = await prisma.save_later_table.create({
  data:{
    product_id:parseInt(product_id),
    product_image:product_image,
    product_name:product_name,
    product_price_cart:product_price,
    product_quantity_cart:product_quantity
}
})
res.status(200).json({ Result:"Cart Details"});
};


