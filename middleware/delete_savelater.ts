import { PrismaClient,save_later_table} from "@prisma/client";
import { visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
const prisma = new PrismaClient();
export const DeleteSavelater = async (req: any, res: any) => {
  //     //req.body  //-------------> Has all request data
  var id=req.body.id;
  console.log(id);
  const deletesavelater = await prisma.save_later_table.delete({
    where: {
      id:parseInt(id),
    },
 })
if(deletesavelater){
    res.status(200).json({Result: "Product Deleted Successfully"});
  }
  else{
    res.status(400).json({ Result: "Something Went Wrong"});
  }
};
