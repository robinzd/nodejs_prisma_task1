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
  export const FeedbackList = async (req: any, res: any) => {
    //req.body  //-------------> Has all request data
    var question1=req.body.question_1;
    var question2=req.body.question_2;
    var question3=req.body.question_3;
    var question4=req.body.question_4;
    var answer1=req.body.answer_1;
    var answer2=req.body.answer_2;
    var answer3=req.body.answer_3;
    var answer4=req.body.answer_4;
    var teacher=req.body.selected_teacher_list;
    let get_feedback_list: any = await prisma.feedback_list.create({
        data: {
            selected_teacher_list:teacher,
            question_1:question1,
            question_2:question2,
            question_3:question3,
            question_4:question4,
            answer_1:answer1,
            answer_2:answer2,
            answer_3:answer3,
            answer_4:answer4,
        },
      });
    res
    .status(200)
    .json({Result:"Feedbacklist",data1:get_feedback_list});
  };