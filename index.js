const express = require('express')
const app = express();



    
app.post('/sendData',(req,res)=>{
    res.send("bolo beta kesa ho .....")
})


app.get ('/sendData',(req,res)=>{
  res.send("jaldi bol ka subha panvel niklna hai.....")
} )
    
app.listen(8000,()=>{
    console.log('server is running on port 8000')
})