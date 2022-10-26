import {
    PrismaClient,
    feedback_list
  } from "@prisma/client";
  import { idText, visitFunctionBody } from "typescript";
  import { isGeneratorFunction } from "util/types";
  // import Crypto from 'crypto-js'
  // import { jwtManager } from '../utils/tokens-helper'
  // import { GetDate } from '../utils/date-helper'
  // import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
  const prisma = new PrismaClient();
  export const GetFeedbackList = async (req: any, res: any) => {
    //req.body  //-------------> Has all request data
    let get_feedback_list: any = await prisma.feedback_list.findMany({
       
      });
    res
    .status(200)
    .json({Result:"Feedbacklist",data1:get_feedback_list});
  };