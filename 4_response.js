// server response pass variable function data with server response

const http = require('http')

const age = 22

http.createServer((request, response) => {
    response.setHeader("Content-Type", "text/html")
    // response.write("<h2>hello</h2>")
    response.write(`
        <html>
        <head>
        <title>learing node.js</title>
        </head>
        <body>
        <h3>ruchi</h3>
        <h4>`+ age + `</h4>
        <h4>`+ new Date() + `</h4>
        </body>
        </html>
        `)
    response.end();                    //current reguest end _ agr hum ya nhi likhnge to server refresh hota rahega 
    //  process.exit()                  // whole procees end  _ after that we have to restart server
}).listen(4400, () => {
    console.log("server  is runing")
})