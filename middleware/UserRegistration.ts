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
  const email=req.body.email_id;
  const contact=req.body.contact_number;
  const getUser: user_registration | null =
    await prisma.user_registration.findUnique({
      where:
       {
        email_id: email,
      },
      
      });
      const Users: user_registration | null =
      await prisma.user_registration.findUnique({
        where: {
          contact_number:contact
        },
   
});
console.log(getUser);
console.log(Users);
if (getUser || Users) {
    res.status(400).json({ Result: "Contact number or Email id already registered"});
  } else {
   let user: any = await prisma.user_registration.create({
      data: {
        first_name: "Robinson",
        last_name: "Rajiv",
        contact_number: Number(12380955156),
        email_id: "ar15gmail.com",
        address: "Tiruchirapalli",
        created_at: date_ob,
        updated_at: date_ob,
        status: 1,
      },
    });
    
    console.log(user);
    let data={
      datasadd:JSON.stringify(user, (_, v) => typeof v === 'bigint' ? v.toString() : v)
    }
    data = JSON.parse(data.datasadd);
    res.status(200).json({ Result: "successfully registered",datas:data,request:req.body});
  }
  
};

