import { PrismaClient,selected1_question} from "@prisma/client";
import { idText, visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
const prisma = new PrismaClient();
export const SelectedQuestion1 = async (req: any, res: any) => {
  //req.body  //-------------> Has all request data
  var question_1 = req.body.question_1;
  var answer_1= req.body.answer;
  const get_teachers_count = await prisma.selected_teachers.aggregate({
    _count:{
        teachers_name:true,
    }
  });
  var teachers_count=get_teachers_count._count.teachers_name;
  console.log(teachers_count);
  const selected_question1 = await prisma.selected1_question.create({
  data:{
    question_1:question_1,
    answer:answer_1,
    selected_id:teachers_count
  }
  });
  res.status(200).json({Result:"Selected Question Added To The table",data:selected_question1});
};
