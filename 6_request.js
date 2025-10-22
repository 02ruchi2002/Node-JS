const http = require('http')


http.createServer((request,response)=>{
    // console.log(request)
    // console.log(request.header)
    console.log(request.url)
    // console.log(request)
    if(request.url == '/'){
        response.write("<h1>home page</h1>")
    }else if(request.url == '/login'){
        response.write("<h1>login page</h1>")
    }else{
        response.write("<h1>other page</h1>")
    }
  response.end("hello")
}).listen(5600)