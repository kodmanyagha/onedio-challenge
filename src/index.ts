import * as dotenv from "dotenv";
import App from "./system/app";

dotenv.config({ path: __dirname + "/../.env" });

const app = new App();

app.start();
