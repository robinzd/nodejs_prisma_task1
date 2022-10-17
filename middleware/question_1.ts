import {
    PrismaClient,
    feedback_question_1
  } from "@prisma/client";
  import { idText, visitFunctionBody } from "typescript";
  import { isGeneratorFunction } from "util/types";
  // import Crypto from 'crypto-js'
  // import { jwtManager } from '../utils/tokens-helper'
  // import { GetDate } from '../utils/date-helper'
  // import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
  const prisma = new PrismaClient();
  export const GetQusetion1 = async (req: any, res: any) => {
    //req.body  //-------------> Has all request data
    const get_feedback_question_1 = await prisma.feedback_question_1.findMany({
  
    });
  res
    .status(200)
    .json({Result:"Question1",data1:get_feedback_question_1});
  };
  