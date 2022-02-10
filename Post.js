import ms from "mongoose";

const Post = new ms.Schema({
  author: { type: String },
  title: { type: String },
  content: { type: String },
  picture: { type: String },
});

export default ms.model("Post", Post);
