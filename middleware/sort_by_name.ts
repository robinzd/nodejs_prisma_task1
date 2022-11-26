import { PrismaClient, table_sorting } from "@prisma/client";
import { idText, visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
import { buffer } from "stream/consumers";
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
const prisma = new PrismaClient();
export const SortByName = async (req: any, res: any) => {
  //req.body  //-------------> Has all request data
  var asce = req.body.ascen;
  var desc = req.body.descn;
  if (desc == 1) {
    const sortby_name_desc = await prisma.table_sorting.findMany({
      orderBy: {
       user_name:'desc'
      },
    });
    var desc_final_result = sortby_name_desc.map(function (e) {
      var desc_result = {
        ID: e.ID,
        user_name: e.user_name,
        contact_number: e.contact_number,
        Address: e.Address,
        profile_pic: e.profile_pic && Buffer.from(e.profile_pic).toString(),
      };
      return desc_result;
    });
    let get_sortby_name_desc = {
      datasadd: JSON.stringify(desc_final_result,(_,v) =>
        typeof v === "bigint" ? v.toString() : v
      ),
    };
    get_sortby_name_desc = JSON.parse(get_sortby_name_desc.datasadd);
    res.status(200).json({ Result: "Image details", data: get_sortby_name_desc });
  }
  else if (asce == 0) {
      const sortby_name_asce = await prisma.table_sorting.findMany({
        orderBy: {
          user_name:'asc'
        },
      });
      var aesc_final_result = sortby_name_asce.map(function (e) {
        var aesc_result = {
          ID: e.ID,
          user_name: e.user_name,
          contact_number: e.contact_number,
          Address: e.Address,
          profile_pic: e.profile_pic && Buffer.from(e.profile_pic).toString(),
        };
        return aesc_result;
      });
      let get_sortby_name_asce = {
        datasadd: JSON.stringify(aesc_final_result, (_, v) =>
          typeof v === "bigint" ? v.toString() : v
        ),
      };
      get_sortby_name_asce = JSON.parse(get_sortby_name_asce.datasadd);
      res
        .status(200)
        .json({Result:"Image details",data:get_sortby_name_asce});
    }
  };