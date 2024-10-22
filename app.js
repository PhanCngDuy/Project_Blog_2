import mongoose from 'mongoose'
import express from 'express'
const app = express()

const stringConnect = "mongodb+srv://6251071017:phancongduy@serverblog.sc451.mongodb.net/BlogData?retryWrites=true&w=majority&appName=ServerBlog"

mongoose.connect(stringConnect).then(()=>{
    console.log('Connect DB Successful');
}).catch((e)=>{
    console.log(e);
})
