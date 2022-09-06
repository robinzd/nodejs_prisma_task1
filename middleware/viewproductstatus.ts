import { PrismaClient, user_registration,status } from "@prisma/client";
import { visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
const prisma = new PrismaClient();
export const Readstatus= async (req: any, res: any) => {
  //     //req.body  //-------------> Has all request data
  // By unique identifier
  // Returns an object or null
  const id = req.body.id;
  const currentstatus: object | null = await prisma.status.findMany({
    select: {
      current_status:true,
    },
  });
  res
      .status(200)
      .json({ Result: "User Details", data:currentstatus});
  
};
