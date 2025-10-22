
const express = require('express')
const app = express()


//      path  calbackFunction
app.get('',(req,resp)=>{
   resp.send("<h1>home page</h1>")
})

app.get('/about' ,(req,resp)=>{
   resp.send("<h1>about page</h1>")
})

app.get('/detail' ,(req,resp)=>{
   resp.send("<h1>detail page</h1>")
})


app.listen(3200)