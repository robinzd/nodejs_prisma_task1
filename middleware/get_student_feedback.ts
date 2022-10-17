import {
  PrismaClient,
  teachers_list,
} from "@prisma/client";
import { idText, visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
const prisma = new PrismaClient();
export const GetTeachers = async (req: any, res: any) => {
  //req.body  //-------------> Has all request data
  const get_teachers = await prisma.teachers_list.findMany({

  });
res
  .status(200)
  .json({Result:"Details",data1:get_teachers});
};
