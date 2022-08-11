import { PrismaClient, user_registration } from "@prisma/client";
import { isGeneratorFunction } from "util/types";
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
let date_ob = new Date();
const prisma = new PrismaClient();
export const UserRegistration = async (req: any, res: any) => {
  //     //req.body  //-------------> Has all request data
  const getUser: user_registration | null =
    await prisma.user_registration.findUnique({
      where: {
        email_id: "r2@gmail.com",
      },
    });

  if (getUser) {
    res.status(400).json({ Result: "already registered"});
  } else {
    let user: any = await prisma.user_registration.create({
      data: {
        first_name: "Robinson",
        last_name: "Rajiv",
        contact_number: Number(6381945164),
        email_id: "r2@gmail.com",
        address: "Tiruchirapalli",
        created_at: date_ob,
        updated_at: date_ob,
        status: 1,
      },
    });
   res.status(200).json({ Result: "successfully inserted"});
  }
};
