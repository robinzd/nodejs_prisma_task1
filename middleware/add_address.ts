import { PrismaClient,address_table} from "@prisma/client";
import { idText, visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
const prisma = new PrismaClient();
export const AddAddress = async (req: any, res: any) => {
  //     //req.body  //-------------> Has all request data
  var address = req.body.user_address;
  let add_dress: any = await prisma.address_table.create({
    data: {
       user_address:address,
    },
  });
  const Address=add_dress.user_address;
  res.status(200).json({data:Address});
};
