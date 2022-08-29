import { PrismaClient, user_registration } from "@prisma/client";
import { visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
const prisma = new PrismaClient();
export const DeleteUser = async (req: any, res: any) => {
  //     //req.body  //-------------> Has all request data
  const id = req.body.id;
  const deleteUser = await prisma.user_registration.delete({
    where: {
      id:id,
    },
  })

  if(deleteUser){
    res.status(200).json({Result: "User Deleted Successfully"});
  }
  else{
    res.status(400).json({ Result: "Something Went Wrong"});
  }
  
};
