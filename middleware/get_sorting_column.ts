import { PrismaClient,sorting_column} from "@prisma/client";
import { idText, visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
const prisma = new PrismaClient();
export const GetSortingColumn = async (req: any, res: any) => {
  //     //req.body  //-------------> Has all request data
 let get_sorting_column: any = await prisma.sorting_column.findMany({
   select:{
    filter_column:true,
   }
  });
res.status(200).json({ Result:"Adress Details",data:get_sorting_column});
};