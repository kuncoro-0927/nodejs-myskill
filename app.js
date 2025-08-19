import express from "express";
import router from "./router.js";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(router);

const port = 3000;

app.listen(port, () => {
  console.log(`Application is running on port ${port}`);
});
