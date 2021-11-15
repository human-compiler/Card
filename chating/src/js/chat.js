"use strict"

const socket = io();

const nickname = document.querySelector("#nickname")
const chatList = document.querySelector(".chatting-list")
const chatInput = document.querySelector(".chatting-input")
const sendButton = document.querySelector(".send-button")

sendButton.addEventListener("click",()=>{
    const param = {
        name: nickname.value,
        msg: chatInput.value
    }
    socket.emit("roomName", param)
})


socket.on("roomName", (data)=>{
    console.log(data)
})

console.log(socket)