import { PrismaClient, user_registration } from "@prisma/client";
import { visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
let date_ob = new Date();
const prisma = new PrismaClient();
export const UserRegistration = async (req: any, res: any) => {
  //     //req.body  //-------------> Has all request data
  
  const first=req.body.first_name;
  const last=req.body.last_name;
  const contact=req.body.contact_number;
  const mail=req.body.email_id;
  const address=req.body.address;
  const status=req.body.status
  const getUser: object | null =
    await prisma.user_registration.findUnique({
      where:
       {
        contact_number:contact,
      },
});
     const Users: object | null =
      await prisma.user_registration.findUnique({
        where: {
         email_id:mail,
        },
});
console.log(getUser);
console.log(Users);

if(getUser || Users){
res.status(400).json({ Result: "Contact number or Email id already registered"});
}
else{ 
   let user: any = await prisma.user_registration.create({
      data: {
        first_name:first,
        last_name: last,
        contact_number: contact,
        email_id: mail,
        address: address,
        created_at: date_ob,
        updated_at: date_ob,
        status: status,
      },
    });
    
    console.log(user);
    let datas={
      datasadd:JSON.stringify(user, (_, v) => typeof v === 'bigint' ? v.toString() : v)
    }
    datas = JSON.parse(datas.datasadd);
    
    res.status(200).json({Result: "successfully registered",data:datas});
  
}
};

