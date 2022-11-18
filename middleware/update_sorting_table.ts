import { PrismaClient, table_sorting } from "@prisma/client";
import { idText, visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
import { buffer } from "stream/consumers";
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
const prisma = new PrismaClient();
export const UpdateTableDetails = async (req: any, res: any) => {
  var sortid = req.body.ID;
  var username = req.body.user_name;
  var contactnumber = req.body.contact_number;
  var profilepic:any=Buffer.from(req.body.profile_pic);
  var user_address=req.body.Address;
  //req.body  //-------------> Has all request data
  if (profilepic) {
    const update_profile_pic = await prisma.table_sorting.update({
      where: {
        ID:parseInt(sortid),
      },
      data: {
        profile_pic:profilepic
      },
    });
    res.status(200).json({Result:"Image details", data: update_profile_pic});
  } else {
    const update_table_details = await prisma.table_sorting.update({
      where: {
        ID:parseInt(sortid),
      },
      data: {
        user_name: username,
        contact_number: parseInt(contactnumber),
        Address: user_address,
      },
    });

    let update_table = {
      datasadd: JSON.stringify(update_table_details, (_, v) =>
        typeof v === "bigint" ? v.toString() : v
      ),
    };
    update_table = JSON.parse(update_table.datasadd);
    console.log(update_table);
    res.status(200).json({Result:"Table details",data:update_table});
  }
};
