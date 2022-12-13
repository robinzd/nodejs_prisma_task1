import { PrismaClient, table_sorting } from "@prisma/client";
import { idText, visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
import { buffer } from "stream/consumers";
import { AnyARecord } from "dns";
import e from "express";
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
const prisma = new PrismaClient();
export const GetTableDetails = async (req: any, res: any) => {
  //req.body  //-------------> Has all request data
  const get_table_details1 = await prisma.table_sorting.findMany({});
  var final_result = get_table_details1.map(function (e) {
    var results = {
      ID: e.ID,
      user_name: e.user_name,
      contact_number: e.contact_number,
      Address: e.Address,
      profile_pic:e.profile_pic && Buffer.from(e.profile_pic).toString(), 
    };
    return results;
  });
 let get_table = JSON.parse(
    JSON.stringify(final_result, (_, v) =>
      typeof v === "bigint" ? v.toString() : v
    )
  );
 res.status(200).json({ Result: "Image details", data: get_table});
};
