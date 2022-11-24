import { PrismaClient,table_sorting} from "@prisma/client";
import { idText, visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
import { buffer } from 'stream/consumers'
import { AnyARecord } from "dns";
import e from "express";
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
const prisma = new PrismaClient();
export const GetTableDetails = async (req: any, res: any)=>{
  //req.body  //-------------> Has all request data
 const get_table_details1= await prisma.table_sorting.findMany({
        
  });
  var result:any=get_table_details1[0].profile_pic
  console.log(result)
  var final_result:any= Buffer.from(result).toString();
  console.log(final_result);
  // if (get_table_details1?.profile_pic) {
  //   var final_result: any = Buffer.from(
  //     get_table_details1.profile_pic
  //   ).toString();
  // }
let get_table = JSON.parse(JSON.stringify(get_table_details1,(_, v) =>
typeof v === "bigint" ? v.toString() : v
));
res.status(200).json({Result:"Image details",data:get_table});
};