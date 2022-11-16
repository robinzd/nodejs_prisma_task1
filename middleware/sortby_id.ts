import { PrismaClient, table_sorting } from "@prisma/client";
import { idText, visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
import { buffer } from "stream/consumers";
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
const prisma = new PrismaClient();
export const SortBy = async (req: any, res: any) => {
  //req.body  //-------------> Has all request data
  var asce = req.body.ascen;
  console.log(asce);
  var desc = req.body.descn;
  console.log(desc);
  if (desc == 1) {
    const sortby_id_desc = await prisma.table_sorting.findMany({
      orderBy: {
        ID: "desc",
      },
    });
    let get_sortby_id_desc = {
      datasadd: JSON.stringify(sortby_id_desc, (_, v) =>
        typeof v === "bigint" ? v.toString() : v
      ),
    };
    get_sortby_id_desc = JSON.parse(get_sortby_id_desc.datasadd);
    console.log(get_sortby_id_desc);
    res.status(200).json({ Result: "Image details", data: get_sortby_id_desc });
  }
  else if (asce == 0) {
      const sortby_id_asce = await prisma.table_sorting.findMany({
        orderBy: {
          ID: "asc",
        },
      });
      let get_sortby_id_asce = {
        datasadd: JSON.stringify(sortby_id_asce, (_, v) =>
          typeof v === "bigint" ? v.toString() : v
        ),
      };
      get_sortby_id_asce = JSON.parse(get_sortby_id_asce.datasadd);
      console.log(get_sortby_id_asce);
      res
        .status(200)
        .json({ Result: "Image details", data: get_sortby_id_asce });
    }
  };
