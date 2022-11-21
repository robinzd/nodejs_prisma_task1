import { PrismaClient, table_sorting } from "@prisma/client";
import { idText, visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
import { buffer } from "stream/consumers";
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
const prisma = new PrismaClient();
export const GetUploadImage = async (req: any, res: any) => {
  //req.body  //-------------> Has all request data
  var id = req.body.ID;
  const get_upload_image = await prisma.table_sorting.findFirst({
    where: {
      ID: parseInt(id),
    },
    select: {
      profile_pic: true,
    },
  });
  if (get_upload_image?.profile_pic) {
    var final_result: any = Buffer.from(
      get_upload_image.profile_pic
    ).toString();
  }
 res.status(200).json({ Result: "Image details", data: final_result});
};
