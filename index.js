const express = require("express")
const mongoose = require("mongoose")
const info = require("./Src/Models/Info")
const { register, login } = require("./Src/Controllers/info")
const server = express()
const {Server} = require("socket.io")
const http = require("http")
const app = http.createServer(server)
const { Socket } = require("socket.io")
const io = new Server(app)

const cors = require("cors")
const { isvalidated, validateForm } = require("./Src/Middlewares")
const { addForm } = require("./Src/Controllers/Form")
server.use(express.json())
server.use(cors())
server.get("/", (req, res) => {
    res.status(200).json({
        uname: "Anshu",
        uphone: "0000000",
        username: "welcome Anshu"
    })
})
server.post("/register", register)
server.post("/login",login)
server.post("/addForm",validateForm,isvalidated,addForm);

io.on("connection",socket=>{
console.log("new user connected")
socket.on("message",(message,room)=>{
    console.log(`New message recieved in ${room} and message is ${message}`);
socket.to(room).emit("message",message)

})
socket.on("join",(room)=>{
    socket.join(room)
    socket.emit("joined")
})
})


app.listen("3000", () => {
    console.log("Server started")
});
mongoose.connect("mongodb://localhost:27017")
    .then(data => console.log("Database connected"))
    .catch(error => console.log(error))
