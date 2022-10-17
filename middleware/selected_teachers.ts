import { PrismaClient,selected_teachers} from "@prisma/client";
import { idText, visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
const prisma = new PrismaClient();
export const SaveSelectedTeachers = async (req: any, res: any) => {
  //req.body  //-------------> Has all request data
  var teachers_name1 = req.body.teachers_name;
  const savelater_cart = await prisma.selected_teachers.create({
   data: {
        teachers_name:teachers_name1
    },
  });
  res.status(200).json({Result:"Product Added To The Cart"});
};
