import { PrismaClient,table_sorting} from "@prisma/client";
import { idText, visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
import { buffer } from 'stream/consumers'
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
const prisma = new PrismaClient();
export const GetTableDetails = async (req: any, res: any)=>{
  //req.body  //-------------> Has all request data
 const get_table_details = await prisma.table_sorting.findMany({
    
  });
  let get_table = {
    datasadd: JSON.stringify(get_table_details, (_, v) =>
      typeof v === "bigint" ? v.toString() : v
    ),
  };
  get_table = JSON.parse(get_table.datasadd);
  console.log(get_table);
  res.status(200).json({Result:"Image details",data:get_table});
};