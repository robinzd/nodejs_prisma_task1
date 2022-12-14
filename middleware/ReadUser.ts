import { PrismaClient, user_registration } from "@prisma/client";
import { visitFunctionBody } from "typescript";
import { isGeneratorFunction } from "util/types";
// import Crypto from 'crypto-js'
// import { jwtManager } from '../utils/tokens-helper'
// import { GetDate } from '../utils/date-helper'
// import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
const prisma = new PrismaClient();
export const ReadUser = async (req: any, res: any) => {
  //     //req.body  //-------------> Has all request data
  // By unique identifier
  // Returns an object or null
  const id = req.body.id;
  const ReadUser: object | null = await prisma.user_registration.findMany({
    where: {
      id: id,
    },
  });

  let data = {
    datasadd: JSON.stringify(ReadUser, (_, v) =>
      typeof v === "bigint" ? v.toString() : v
    ),
  };
  data = JSON.parse(data.datasadd);

  if (ReadUser) {
    res
      .status(200)
      .json({ Result: "User Details", data:data});
  } else {
    res.status(400).json({ Result: "Record Not Found" });
  }
};
