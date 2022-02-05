import express from "express";
import ms from "mongoose";

import Post from "./Post.js";
import router from "./Router.js";

const PORT = 8050;
const DB_URL =
  "mongodb+srv://alinur:909074402@cluster0.gzcfe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const app = express();

app.use(express.json());
app.use('/api', router);

async function run() {
  try {
    await ms.connect(DB_URL);
    app.listen(PORT, () =>
      console.log("Server has been started! " + "Port: " + PORT)
    );
  } catch (e) {
    console.log(e);
  }
}

run();
