import { PrismaClient,save_address_table} from "@prisma/client";
import { idText, visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
const prisma = new PrismaClient();
export const GetSaveAddress = async (req: any, res: any) => {
  //     //req.body  //-------------> Has all request data
 let get_save_address: any = await prisma.save_address_table.findMany({
   
  });
 let data3 = {
    datasadd: JSON.stringify(get_save_address, (_, v) =>
      typeof v === "bigint" ? v.toString() : v
    ),
  };
  data3 = JSON.parse(data3.datasadd);
  res.status(200).json({ Result:"Adress Details",data:data3});
};