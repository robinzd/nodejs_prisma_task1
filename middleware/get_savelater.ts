import { PrismaClient,save_later_table} from "@prisma/client";
import { idText, visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
const prisma = new PrismaClient();
export const GetSaveLater = async (req: any, res: any) => {
  //req.body  //-------------> Has all request data
const get_savelater = await prisma.save_later_table.findMany({
  

})
res.status(200).json({ Result:"Prouct Details",data:get_savelater});
};


