import express, { Request, Response } from "express";
import controllers from "../config/controllers";
import DiContainer from "./di/di-container";
import DiContainerInterface from "./di/di-container-interface";

export default class App {
  private diContainer: DiContainerInterface;
  private controllers: any[];
  private server: express.Application;

  constructor() {
    this.diContainer = new DiContainer();
    this.controllers = controllers;
    console.log(">> this.controllers", this.controllers);
    this.server = express();
  }

  public async start() {
    const port = process.env.PORT || 8080;

    this.server.get("/", (req: Request, res: Response) => {
      res.send("foo bar");
    });

    this.server.get("/test", (req: Request, res: Response) => {
      res.send("this is a test");
    });

    this.server.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  }
}
