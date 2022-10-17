import { PrismaClient,selected3_question} from "@prisma/client";
import { idText, visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
const prisma = new PrismaClient();
export const SelectedQuestion3 = async (req: any, res: any) => {
  //req.body  //-------------> Has all request data
  var question_3 = req.body.question_3;
  var answer_1= req.body.answer;
  const get_teachers_count = await prisma.selected_teachers.aggregate({
    _count:{
        teachers_name:true,
    }
  });
  var teachers_count=get_teachers_count._count.teachers_name;
  console.log(teachers_count);
  const selected_question3 = await prisma.selected3_question.create({
  data:{
    question_3:question_3,
    answer:answer_1,
    selected_id:teachers_count
  }
  });
  res.status(200).json({Result:"Selected Question Added To The table",data:selected_question3});
};
