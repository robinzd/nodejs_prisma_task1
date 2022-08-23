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
  const contact1 = req.body.new_contact_number;
  const contact = req.body.registered_contact_number;
  const mail = req.body.registered_email_id;
  const mail1 = req.body.new_email_id;
  const address = req.body.address;
  const status = req.body.status;
  const CheckContact: object | null = await prisma.user_registration.findUnique(
    {
      where: {
        contact_number: contact1,
      },
    }
  );
  const CheckMail: object | null = await prisma.user_registration.findUnique({
    where: {
      email_id: mail1,
    },
  });

  if (CheckContact && CheckMail) {
    const updateUsers3 = await prisma.user_registration.update({
      where: {
        email_id: mail,
      },
      data: {
        first_name: first,
        last_name: last,
        email_id: mail,
        contact_number: contact,
        address: address,
        updated_at: date_ob,
        status: status,
      },
    });
    let data3 = {
      datasadd: JSON.stringify(updateUsers3, (_, v) =>
        typeof v === "bigint" ? v.toString() : v
      ),
    };
    data3 = JSON.parse(data3.datasadd);
    res.status(200).json({
      Result:
        "contact number and email id already registered cannot be updated remaining fields are updated",
      data: data3,
    });
  } else if (CheckContact != null) {
    const updateUsers1 = await prisma.user_registration.update({
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
    let data1 = {
      datasadd: JSON.stringify(updateUsers1, (_, v) =>
        typeof v === "bigint" ? v.toString() : v
      ),
    };
    data1 = JSON.parse(data1.datasadd);
    res.status(200).json({
      Result:
        "contact number already registered cannot be updated remaining fields are updated",
      data: data1,
    });
  } else if (CheckMail != null) {
    const updateUsers2 = await prisma.user_registration.update({
      where: {
        email_id: mail,
      },
      data: {
        first_name: first,
        last_name: last,
        email_id: mail,
        contact_number: contact1,
        address: address,
        updated_at: date_ob,
        status: status,
      },
    });
    let data2 = {
      datasadd: JSON.stringify(updateUsers2, (_, v) =>
        typeof v === "bigint" ? v.toString() : v
      ),
    };
    data2 = JSON.parse(data2.datasadd);
    res.status(200).json({
      Result:
        "Email Id already registered cannot be updated remaining fields are updated",
      data: data2,
    });
  } else {
    const updateUsers = await prisma.user_registration.update({
      where: {
        email_id: mail,
      },
      data: {
        first_name: first,
        last_name: last,
        email_id: mail1,
        contact_number: contact1,
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
    });
  }
};
