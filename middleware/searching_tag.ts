import { PrismaClient, table_sorting } from "@prisma/client";
import { idText, visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
const prisma = new PrismaClient();
export const GetSearchTag = async (req: any, res: any) => {
  //req.body  //-------------> Has all request data
  var radio_button = req.body.sortingcolumn;
  var input_box = req.body.inputvalue;
  if(radio_button == "user_name" || radio_button == "Address"){
  const get_searchtag1 = await prisma.table_sorting.findMany({
    where: {
      OR: [
        {
          user_name: input_box,
        },
        {
          Address: input_box,
        },
      ],
    },
  });
  var search_final_result = get_searchtag1.map(function (e) {
    var search_result = {
      ID: e.ID,
      user_name: e.user_name,
      contact_number: e.contact_number,
      Address: e.Address,
      profile_pic: e.profile_pic && Buffer.from(e.profile_pic).toString(),
    };
    return search_result;
  });
  
  let get_search_tag = {
    datasadd: JSON.stringify(search_final_result, (_, v) =>
      typeof v === "bigint" ? v.toString() : v
    ),
  };
  get_search_tag = JSON.parse(get_search_tag.datasadd);
  res.status(200).json({Result:"Details",data:get_search_tag});
}
else if(radio_button == "contact_number"){
  const get_number_searchtag = await prisma.table_sorting.findMany({
    where: {
     contact_number:parseInt(input_box)
    },
  });
  var search_final_result1 = get_number_searchtag.map(function (e) {
    var search_result1 = {
      ID: e.ID,
      user_name: e.user_name,
      contact_number: e.contact_number,
      Address: e.Address,
      profile_pic: e.profile_pic && Buffer.from(e.profile_pic).toString(),
    };
    return search_result1;
  });
  let get_search_numbertag = {
    datasadd: JSON.stringify(search_final_result1,(_, v) =>
      typeof v === "bigint" ? v.toString() : v
    ),
  };
  get_search_numbertag = JSON.parse(get_search_numbertag.datasadd);
  res.status(200).json({Result:"Details",data:get_search_numbertag});
}
};
