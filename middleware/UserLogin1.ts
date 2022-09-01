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
  const email = req.body.email_id;
  const contact = req.body.contact_number;
  const getUserlogin: object | null = await prisma.user_registration.findFirst({
    where: {
      email_id: email,
    },
  });
  const getlogin: object | null = await prisma.user_registration.findFirst({
    where: {
      contact_number:parseInt(contact),
    },
});

  let data = {
    datasadd: JSON.stringify(getlogin, (_, v) =>
      typeof v === "bigint" ? v.toString() : v
    ),
  };
  data = JSON.parse(data.datasadd);

  if (getUserlogin && getlogin) {
    res.status(200).json({ Result: "Successfully Loged In" });
  } else {
    res
      .status(400)
      .json({ Result: "Contact Number Or Email Id is Not Matched" });
  }
};
