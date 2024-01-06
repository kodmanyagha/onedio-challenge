import * as dotenv from "dotenv";
import App from "./system/app";
import winston from "winston";

dotenv.config({ path: __dirname + "/../.env" });

const app = new App();

app.start();
