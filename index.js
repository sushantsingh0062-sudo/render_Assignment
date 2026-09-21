const express = require('express')
const app = express();
const PORT = process.env.PORT || 8000


    
app.post('/sendData',(req,res)=>{
    res.send("bolo beta kesa ho .....")
})


app.get ('/sendData',(req,res)=>{
  res.send("jaldi bol ka subha panvel niklna hai.....")
} )
    
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})