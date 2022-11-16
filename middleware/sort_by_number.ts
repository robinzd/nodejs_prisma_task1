import { PrismaClient, table_sorting } from "@prisma/client";
import { idText, visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
import { buffer } from "stream/consumers";
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
const prisma = new PrismaClient();
export const SortByNumber = async (req: any, res: any) => {
  //req.body  //-------------> Has all request data
  var asce = req.body.ascen;
  console.log(asce);
  var desc = req.body.descn;
  console.log(desc);
  if (desc == 1) {
    const sortby_number_desc = await prisma.table_sorting.findMany({
      orderBy: {
       contact_number:'desc'
      },
    });
    let get_sortby_number_desc = {
      datasadd: JSON.stringify(sortby_number_desc,(_,v) =>
        typeof v === "bigint" ? v.toString() : v
      ),
    };
    get_sortby_number_desc = JSON.parse(get_sortby_number_desc.datasadd);
    console.log(get_sortby_number_desc);
    res.status(200).json({ Result: "Image details", data: get_sortby_number_desc });
  }
  else if (asce == 0) {
      const sortby_number_asce = await prisma.table_sorting.findMany({
        orderBy: {
          contact_number:'asc'
        },
      });
      let get_sortby_number_asce = {
        datasadd: JSON.stringify(sortby_number_asce, (_, v) =>
          typeof v === "bigint" ? v.toString() : v
        ),
      };
      get_sortby_number_asce = JSON.parse(get_sortby_number_asce.datasadd);
      console.log(get_sortby_number_asce);
      res
        .status(200)
        .json({Result:"Image details",data:get_sortby_number_asce});
    }
  };