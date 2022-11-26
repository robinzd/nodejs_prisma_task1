import { PrismaClient, table_sorting } from "@prisma/client";
import { idText, visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
import { buffer } from "stream/consumers";
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
const prisma = new PrismaClient();
export const SortByAddress = async (req: any, res: any) => {
  //req.body  //-------------> Has all request data
  var asce = req.body.ascen;
  var desc = req.body.descn;
  if (desc == 1) {
    const sortby_address_desc = await prisma.table_sorting.findMany({
      orderBy: {
     Address:'desc'
      },
    });
    var desc_final_result = sortby_address_desc.map(function (e) {
      var desc_result = {
        ID: e.ID,
        user_name: e.user_name,
        contact_number: e.contact_number,
        Address: e.Address,
        profile_pic: e.profile_pic && Buffer.from(e.profile_pic).toString(),
      };
      return desc_result;
    });
    let get_sortby_address_desc = {
      datasadd: JSON.stringify(desc_final_result,(_,v) =>
        typeof v === "bigint" ? v.toString() : v
      ),
    };
    get_sortby_address_desc = JSON.parse(get_sortby_address_desc.datasadd);
    res.status(200).json({ Result: "Image details", data: get_sortby_address_desc });
  }
  else if (asce == 0) {
      const sortby_address_asce = await prisma.table_sorting.findMany({
        orderBy: {
          Address:'asc'
        },
      });
      var aesc_final_result = sortby_address_asce.map(function (e) {
        var aesc_result = {
          ID: e.ID,
          user_name: e.user_name,
          contact_number: e.contact_number,
          Address: e.Address,
          profile_pic: e.profile_pic && Buffer.from(e.profile_pic).toString(),
        };
        return aesc_result;
      });
      let get_sortby_address_asce = {
        datasadd: JSON.stringify(aesc_final_result, (_, v) =>
          typeof v === "bigint" ? v.toString() : v
        ),
      };
      get_sortby_address_asce = JSON.parse(get_sortby_address_asce.datasadd);
      res
        .status(200)
        .json({Result:"Image details",data:get_sortby_address_asce});
     }
  };