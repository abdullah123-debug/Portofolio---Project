import express from "express";

const messageRouter = express.Router();

messageRouter.get("/messages", (req, res) => {
  res.send("Messages.....");
});

export default messageRouter;
