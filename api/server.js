const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const restricted = require('../auth/restricted-middleware');

const usersRouter = require("../users/users-router.js");
const authRouter = require('../auth/auth-router');

const server = express();

//global middleware
server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api', authRouter);
server.use("/api/users", restricted, usersRouter);


server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;
