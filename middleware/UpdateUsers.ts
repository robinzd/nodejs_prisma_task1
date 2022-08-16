import { PrismaClient, user_registration } from "@prisma/client";
import { visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
let date_ob = new Date();
const prisma = new PrismaClient();
export const UserUpdate = async (req: any, res: any) => {
  //     //req.body  //-------------> Has all request data
  const first = req.body.first_name;
  const last = req.body.last_name;
  const contact = req.body.contact_number;
  const mail = req.body.registered_email_id;
  const mail1 = req.body.new_email_id;
  const address = req.body.address;
  const status = req.body.status;
  const CheckContact: object | null = await prisma.user_registration.findUnique(
    {
      where: {
        contact_number: contact,
      },
    }
  );
  const CheckMail: object | null = await prisma.user_registration.findUnique({
    where: {
      email_id: mail1,
    },
  });

 
   if (CheckMail || CheckContact) {
    res
      .status(400)
      .json({ Result: "Contact Or Email Already Registered or record not found" });
  } else {
    const updateUsers = await prisma.user_registration.update({
      where: {
        email_id: mail,
      },
      data: {
        first_name: first,
        last_name: last,
        email_id: mail1,
        contact_number: contact,
        address: address,
        updated_at: date_ob,
        status: status,
      },
    });
    let data = {
      datasadd: JSON.stringify(updateUsers, (_, v) =>
        typeof v === "bigint" ? v.toString() : v
      ),
    };
    data = JSON.parse(data.datasadd);
    res.status(200).json({
      Result: "Successfully User Updated",
      data: data,
      request: req.body,
    });
  }
};
