const express = require("express")
const http = require("http")
const app = express();
const path = require("path")
const server = http.createServer(app)
const socketIO = require("socket.io")
const moment = require("moment")

const io = socketIO(server);

app.use(express.static(path.join(__dirname, "src")))
const PORT = process.env.PORT || 5000;

io.on("connection", (socket)=>{
    socket.on("roomName",(data)=>{
        const{ name,msg } = data;
        io.emit("roomName", {
            name,
            msg,
            time: moment(new Date()).format("h:mm A")
            //?? 이거 왜이럼 
        })
    })
})

server.listen(PORT, ()=>console.log (`server is running ${PORT}`))