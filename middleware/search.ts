import {
    PrismaClient,
    user_registration
  } from "@prisma/client";
  import { visitFunctionBody } from "typescript";
  import { isGeneratorFunction } from "util/types";
  // import Crypto from 'crypto-js'
  // import { jwtManager } from '../utils/tokens-helper'
  // import { GetDate } from '../utils/date-helper'
  // import { ApiRequestLog, ApiResponseLog } from '../utils/api-helper'
  const prisma = new PrismaClient();
  export const Search = async (req: any, res: any) => {
    //     //req.body  //-------------> Has all request data
    var name=req.body.first_name;
    const result = await prisma.user_registration.findMany({
        where: {
          first_name: {
            contains: name,
          },
        },
      })
      let data = {
        datasadd: JSON.stringify(result, (_, v) =>
          typeof v === "bigint" ? v.toString() : v
        ),
      };
      data = JSON.parse(data.datasadd);

    res.status(200).json({data:data});
};