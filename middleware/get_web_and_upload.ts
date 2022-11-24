import { PrismaClient,profile_picture } from "@prisma/client";
import { idText, visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
import { buffer } from "stream/consumers";
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
const prisma = new PrismaClient();
export const GetProfilePicture = async (req: any, res: any) => {
  //req.body  //-------------> Has all request data
  const get_upload_image = await prisma.profile_picture.findFirst({
   select:{
    cropped_image:true,
   }
  });
  if (get_upload_image?.cropped_image) {
    var final_result: any = Buffer.from(
      get_upload_image.cropped_image
    ).toString();
  }
 res.status(200).json({ Result:"Image details",data:final_result});
};
