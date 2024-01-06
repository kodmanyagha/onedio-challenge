import express, { Request, Response } from "express";
import { Mongoose, connect } from "mongoose";
import controllers from "../config/controllers";
import DiContainer from "./di/di-container";
import DiContainerInterface from "./di/di-container-interface";
import winston from "winston";

export default class App {
  private diContainer: DiContainerInterface;
  private controllers: any[];
  private server: express.Application;
  private db?: Mongoose = undefined;
  private logger: winston.Logger;

  constructor() {
    this.logger = winston.createLogger({
      level: "info",
      format: winston.format.json(),
      defaultMeta: { service: "user-service" },
      transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new winston.transports.File({ filename: "error.log", level: "error" }),
        new winston.transports.File({ filename: "combined.log" }),
      ],
    });

    this.diContainer = new DiContainer();
    this.controllers = controllers;

    // TODO Use winstonlog or similar library here.
    console.log(">> this.controllers", this.controllers);

    this.server = express();
  }

  protected async connectDb() {
    this.db = await connect(
      "mongodb://" +
        process.env.DB_USERNAME +
        ":" +
        process.env.DB_PASSWORD +
        "@" +
        process.env.DB_HOST +
        ":" +
        process.env.DB_PORT +
        "/" +
        process.env.DB_DATABASE
    );

    console.log(">> DB connection:", this.db);
  }

  protected async startServer() {
    const port = process.env.PORT || 8080;

    this.server.get("/", async (req: Request, res: Response) => {
      res.send("foo bar");
    });

    this.server.get("/test", async (req: Request, res: Response) => {
      res.send("this is a test");
    });

    this.server.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  }

  public async start() {
    await this.connectDb();
    await this.startServer();
  }
}
