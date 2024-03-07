const mongoose = require('mongoose');
const chat = require('./models/chat');

main().then(()=>{
    console.log("connection successful")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

let allChats = [
    {
        from : "neha",
        to : "priya",
        msg : "hii this is a chat",
        createdAt: new Date(),
    },
    {
        from : "alka",
        to : "riya",
        msg : "hii this is a chat",
        createdAt: new Date(),
    },
    {
        from : "sneha",
        to : "sreya",
        msg : "hii this is a chat",
        createdAt: new Date(),
    }
]
chat.insertMany(allChats);