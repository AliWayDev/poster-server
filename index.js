import express from "express";
import ms from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

import router from "./Router.js";

const PORT = 8050;
const DB_URL =
  "mongodb+srv://alinur:909074402@cluster0.gzcfe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(express.json());
app.use("/api", router);

async function run() {
  try {
    await ms.connect(DB_URL);
    app.listen(process.env.PORT || PORT, () =>
      console.log("Server has been started! " + "Port: " + PORT)
    );
  } catch (e) {
    console.log(e);
  }
}

run();
