import {
    PrismaClient,
    feedback_question_2
  } from "@prisma/client";
  import { idText, visitFunctionBody } from "typescript";
  import { isGeneratorFunction } from "util/types";
  // import Crypto from 'crypto-js'
  // import { jwtManager } from '../utils/tokens-helper'
  // import { GetDate } from '../utils/date-helper'
  // import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
  const prisma = new PrismaClient();
  export const GetQusetion2 = async (req: any, res: any) => {
    //req.body  //-------------> Has all request data
    const get_feedback_question_2 = await prisma.feedback_question_2.findMany({
                
    });
  res
    .status(200)
    .json({Result:"Question2",data1:get_feedback_question_2});
  };
  