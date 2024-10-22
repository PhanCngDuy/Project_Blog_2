const express = require('express')
const app = express()
app.get('/Blog',(req,res)=>{
    res.send({
        mem1 : 'MingQuy',
        mem2 : 'CongDuy'
    })
})
const port = 1401;
app.listen(port,()=>{
    console.log('Connect!:',port)
})

