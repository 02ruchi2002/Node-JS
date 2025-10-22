
const http = require('http')
http.createServer((request,response)=>{
   response.write("<h1>hello this is ruchi</h1>")
   response.end("HELLO ")
}).listen(4800)

