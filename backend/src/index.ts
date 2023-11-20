import express from "express";
const app = express();
const port = 3000;
import router from "./router/router";
import cors from "cors";
import bodyParser from "body-parser";

app.use(cors());
app.use(bodyParser.json());
app.use(router);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

export default app;
