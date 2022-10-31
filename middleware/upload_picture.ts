import { PrismaClient, profile_picture } from "@prisma/client";
import { idText, visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
import { buffer } from 'stream/consumers'
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
const prisma = new PrismaClient();
export const UploadImage = async (req: any, res: any) => {
  //req.body  //-------------> Has all request data
  console.log(req.body);
  var owner_signature:any=Buffer.from(req.body.final_image).toString();
  console.log( typeof owner_signature);
  console.log(owner_signature);
  const cropped_image = await prisma.profile_picture.create({
    data: {
      cropped_image:owner_signature,
    },
  });
  console.log(cropped_image);
  res.status(200).json({Result:cropped_image});
};

