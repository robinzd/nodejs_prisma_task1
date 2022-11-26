import { PrismaClient, table_sorting } from "@prisma/client";
import { idText, visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
import { buffer } from "stream/consumers";
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
const prisma = new PrismaClient();
export const GetUploadImage = async (req: any, res: any) => {
  //req.body  //-------------> Has all request data
  var id = req.body.ID;
  const get_upload_image = await prisma.table_sorting.findMany({
   where:{
    ID:parseInt(id)
   }
  });
   var final_result=get_upload_image.map(function(e){
   var result={
    user_name:e.user_name,
    contact_number:e.contact_number,
    address:e.Address,
    profile_pic:e.profile_pic && Buffer.from(e.profile_pic).toString()
  };
  return result;
  });
  let get_table = JSON.parse(
    JSON.stringify(final_result, (_, v) =>
      typeof v === "bigint" ? v.toString() : v
    )
  );
  console.log(get_table);
res.status(200).json({ Result: "user details", data: get_table});
};
