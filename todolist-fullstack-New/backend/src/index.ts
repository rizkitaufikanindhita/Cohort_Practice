import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import response from "./utils/response";
import indexEndpoint from "./routes/index";
import statusCode from "./utils/statusCode";

const app: Application = express();
require("dotenv").config();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get("/", (_req: Request, res: Response) => {
  response(statusCode.OK, "server is running", res);
});

app.use("/api/v1", indexEndpoint);

app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  response(statusCode.Bad_Request, { msg: `ada error karena ${err}` }, res);
});

app.listen(port, () => {
  console.log(`server up at port ${port}`);
});
