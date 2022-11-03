import { PrismaClient, profile_picture} from "@prisma/client";
import { idText, visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
import { buffer } from 'stream/consumers'
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
const prisma = new PrismaClient();
export const UploadImage = async (req: any, res: any)=>{
  //req.body  //-------------> Has all request data
  var owner_signature:any=Buffer.from(req.body.cropped_image)
  let get_count: any = await prisma.profile_picture.aggregate({
    _count:{
     cropped_image:true
    }
   });
 var final_count=get_count._count.cropped_image;
 if(final_count < 1){
  const cropped_image = await prisma.profile_picture.create({
    data:{
      cropped_image:owner_signature,
    },
  });
   res.status(200).json({Result:"Image Uploaded Succesfully"});
}
else{
  const update_cropped_image = await prisma.profile_picture.updateMany({
    data:{
      cropped_image:owner_signature,
    },
  });
   res.status(200).json({Result:"Image Updated Succesfully"});
}
}

