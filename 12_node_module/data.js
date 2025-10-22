const queryString = require('querystring')

function data(req,resp){
    let dataBody = []
    req.on('data',(chunk)=>{
        dataBody.push(chunk)
    })
    req.on('end',()=>{
        let rawData = Buffer.concat(dataBody).toString()
        let readabelData = queryString.parse(rawData)
        console.log(readabelData)
    })
    resp.end("<h1>data submited</h1>")
}

module.exports=data