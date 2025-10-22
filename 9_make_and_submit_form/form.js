// make html form in js file          submit it with post request

// const http = require('http')

// http.createServer((req, resp) => {
//     resp.writeHead(200, { "content-type": "text/html" })
//     if (req.url == "/") {
//         resp.write(`
//     <form action="/submit" method="post">
//     <input type="text" placeholder="enter your name" name="name"/>
//     <input type="text" placeholder="enter your email" name="email"/>
//     <button>Submit</button>
//     </form>
//     `)
//     } else if (req.url == '/submit') {
//         resp.write("<h1>form submitted</h1>")
//     }

//     resp.end()
// }).listen(3800)


// ________________________________________________________________________________________________________

const http = require('http');
const fs = require('fs');
const { buffer } = require('stream/consumers');
const queryString = require('querystring')


http.createServer((req, resp) => {

    fs.readFile('form.html', 'utf-8', (error, data) => {

        if (error) {
            resp.writeHead(500, { "content-type": "text/plain" })
            resp.end("internal server error")
            console.log("erro",error)

            return;
        }
        resp.writeHead(200, { "content-type": "text/html" })

        if (req.url == "/") {
            resp.write(data)
        } else if (req.url == '/submit') {
//________________________10_____________handle form request __________________________________________________

            // on data event  jis pr hume data recieve hota h 
            let dataBody =[]
            req.on('data',(chunk)=>{
                  dataBody.push(chunk)
            })

             // on req end event jis pr hum seare data ko collect krte h process krke readabel form mai lekar aate h 
            req.on('end',()=>{
                let rawData = Buffer.concat(dataBody).toString()
                let readabelData = queryString.parse(rawData)
                let dataString = "my name is" +readabelData.name+ "and emai" +readabelData.name+ 
                console.log(dataString)

            })

            //____________________________________________
            resp.write("<h1>form submitted</h1>")
        }
        resp.end()

    })
}).listen(3800)