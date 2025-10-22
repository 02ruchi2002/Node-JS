
const http = require('http')
const form = require("./form.js")
const data = require("./data.js")

http.createServer((req,resp)=>{
   if(req.url == "/"){
        form(req,resp)
    }else if(req.url == "/submit"){
        data(req,resp)
    }
}).listen(3200)