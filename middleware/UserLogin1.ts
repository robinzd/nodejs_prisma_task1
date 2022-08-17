import { PrismaClient, user_registration } from "@prisma/client";
import { visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
const prisma = new PrismaClient();
export const UserLogin = async (req: any, res: any) => {
  //     //req.body  //-------------> Has all request data
  const email=req.body.email_id;
  const contact=req.body.contact_number;
  const getUserlogin: object | null = await prisma.user_registration.findUnique({
    where: {
      email_id:email,
    
    },
})
  const getlogin: object | null = await prisma.user_registration.findUnique({
    where: {
     contact_number:contact
    },

    select: {
       id:true,
       first_name:true,
       last_name:true,
       contact_number:true,
       email_id:true,
       address:true,
       created_at:true,
       updated_at:true,
       status:true,
      },


})

  let data={
    datasadd:JSON.stringify(getlogin, (_, v) => typeof v === 'bigint' ? v.toString() : v)
  }
  data = JSON.parse(data.datasadd);
   

if(getUserlogin && getlogin){
res.status(200).json({ Result: "Successfully Loged In",data:data});
}
else{
    res.status(400).json({ Result: "Contact Number Or Email Id is Not Matched"});
} 

};

