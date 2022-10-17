import { PrismaClient,selected4_question} from "@prisma/client";
import { idText, visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
const prisma = new PrismaClient();
export const SelectedQuestion4 = async (req: any, res: any) => {
  //req.body  //-------------> Has all request data
  console.log(req.body)
  var question_4 = req.body.question_4;
  console.log(question_4);
  var answer_4= req.body.answer;
  console.log(answer_4);
  const get_teachers_count = await prisma.selected_teachers.aggregate({
    _count:{
        teachers_name:true,
    }
  });
  var teachers_count=get_teachers_count._count.teachers_name;
  console.log(teachers_count);
  const selected_question4 = await prisma.selected4_question.create({
  data:{
    question_4:question_4,
    answer:answer_4,
    selected_id:teachers_count
  }
  });
  res.status(200).json({Result:"Selected Question Added To The table",data:selected_question4});
};
