import { Response } from "express";
import statusCode from "./statusCode";

const response = (statusCode: statusCode, data: any, res: Response) => {
  res.json({
    status: statusCode,
    data: data,
  });
};

export default response;
