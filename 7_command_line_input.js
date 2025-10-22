// 1. getting input from command line
// 2. dynamic port

// const argument = process.argv;

// console.log("______________",argument)
// console.log("______________",argument[3])


const http = require('http')

const arg = process.argv;
const port = arg[2];
http.createServer((req,res)=>{
    res.write("testing input form command line")
  res.end()
}
).listen(port)