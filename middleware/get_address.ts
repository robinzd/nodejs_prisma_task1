import { PrismaClient,address_table} from "@prisma/client";
import { idText, visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
const prisma = new PrismaClient();
export const GetAddress = async (req: any, res: any) => {
  //     //req.body  //-------------> Has all request data
 let get_address: any = await prisma.address_table.findMany({
   
  });
  res.status(200).json({ Result: "Adress Details",data:get_address});
};