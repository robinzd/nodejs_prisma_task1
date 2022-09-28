import { PrismaClient, save_address_table } from "@prisma/client";
import { idText, visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
const prisma = new PrismaClient();
export const AppendAddress = async (req: any, res: any) => {
  //     //req.body  //-------------> Has all request data
  var address = req.body.user_address;
  var street=req.body.user_street;
  var pincode=req.body.user_pincode;
  console.log(address);
  let get_count: any = await prisma.save_address_table.aggregate({
   _count:{
    user_address:true,
   }
  });
var final_count=get_count._count.user_address;
if(final_count > 0){
  let update: any = await prisma.save_address_table.updateMany({
    data: {
      user_address: address,
      user_street:street,
      user_pincode:parseInt(pincode),
    },
  });
  res.status(200).json({Result:"Address Updated"});
}else{
  let save_adddress: any = await prisma.save_address_table.create({
    data: {
      user_address: address,
      user_street:street,
      user_pincode:parseInt(pincode),
    },
  });
  res.status(200).json({Result:"Address Updated"});
}
};
