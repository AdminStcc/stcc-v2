const PORT =process.env.PORT || 5000;
const path = require('path');

const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);

const cors = require("cors");

const socketio = require("socket.io");

exports.io = socketio(server, {
  transports: ['websocket', 'polling']
});


app.use(express.static(path.resolve(__dirname, './client/build')));
app.use(cors());
app.use(express.json());

//session

app.use("/auth", require("./routes/sessionRouter"));
app.use("/users", require("./routes/userRouter"));
app.use("/registries", require("./routes/registryRouter"));


server.listen(PORT, ()=>{
  console.log(`Server listening on port ${PORT}`)
});

