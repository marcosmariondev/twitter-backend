const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const server = require("http").Server(app);
const io = require("socket.io")(server);

mongoose.connect(
  "mongodb+srv://goweek:goweek@cluster0-0zc7b.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);
app.use((req, res) => {
  req.io = io;
  return next();
});

app.use(cors());
app.use(express.json());
app.use(require("./routes.js"));

server.listen(4000, () => {
  console.log("Server started on port 4000!!");
});
