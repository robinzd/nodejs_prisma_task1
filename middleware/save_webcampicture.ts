import { PrismaClient,web_picture} from "@prisma/client";
import { idText, visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
import { buffer } from 'stream/consumers'
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
const prisma = new PrismaClient();
export const WebUploadImage = async (req: any, res: any)=>{
  //req.body  //-------------> Has all request data
  var captured_image:any=Buffer.from(req.body.web_image)
  console.log(captured_image)
  let get_count: any = await prisma.web_picture.aggregate({
    _count:{
        web_image:true
    }
   });
 var final_count=get_count._count.web_image;
 if(final_count < 1){
  const webcam_image = await prisma.web_picture.create({
    data:{
    web_image:captured_image,
    },
  });
   res.status(200).json({Result:"Image Uploaded Succesfully"});
}
else{
  const webcam_image = await prisma.web_picture.updateMany({
    data:{
        web_image:captured_image,
    },
  });
   res.status(200).json({Result:"Image Updated Succesfully"});
}
}

