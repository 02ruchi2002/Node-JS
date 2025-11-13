// const { readFile } = require('fs/promises')
// const http = require('http')

// http.createServer((req,resp)=>{
//     setHeader('Content-Type','application.json')
//     // sensitiveHeader('Content-Type','text/html')
//     const data = JSON.stringify(data)
//   resp.write("hello")
//   resp.end()
// //   process.exit()
// }).listen(3400)

// ___________________________________________________________________________________________________________________________


// command line input

// const  argv = process.argv
// const port = argv[2]

// http.createServer((req,resp)=>{
   
// }).listen(port)


// ___________________________________________________________________________________________________________________________

// send html file in response

// const http = require('http')
// const fs = require('fs')

// http.createServer((req,resp)=>{
//   readFile('html/index.html','utf-8',(error,data)=>{
//     if(error){
//       resp.writeHead(500,{'Content-Type':'text/plain'})
//       resp.write("internal server error")
//       resp.end()
//     }
//       resp.writeHead(200,{'Content-Type':'text/html'})
//       resp.write(data)
//       resp.end()
//   })
// })

// ___________________________________________________________________________________________________________________________

// const http = require('http')
// const fs = require('fs')
// const {buffer} = require('stream/consumers')
// const queryString = require('querystring')

// http.createServer((req,resp)=>{
//   fs.readFile('html/form.html','utf-8',(err,data)=>{
//     if(err){
//       resp.writeHead(500,{'Content-Type':'text/plain'})
//       resp.end("internal server error")
//     }

//     fs.writeHead(200,{'Content-Type':'text/plain'})
//     if(req.url == '/'){
//       resp.write(data)
//     }else if(req.url == '/submit'){
//       let data = []
//       req.on('data',(chunk)=>{
//         data.push(chunk)
//       })

//       req.on('end',()=>{
//         let rawData = Buffer.concat(data).toString()
//         let readabelData = queryString.parse(rawData)
//       })
//       resp.end()
//     }
//   })
// })

// ______________________________________________________________________________________________________________________

// module.exports=form

// ______________________________________________________________________________________________________________________

// const express = require('express')

// const app = express()

// app.get('/',(req,resp)=>{
//      resp.send()
// })

// app.listen(3200)

// _________________________________________________________________________________________________________________________

// middleware 

import express from 'express'

const app = express()

function checkAge (req,resp,next) {
    if(!req.query.url || req.query.age < 18){
       resp.send("you can not access this page")
    }else{
       next()
    }
}

app.get('/profile',checkAge,(req,resp)=>{
     resp.send("profile page")
})

app.listen(3200)
