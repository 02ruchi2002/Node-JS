// npm i cors

import express from "express"
import cors from "cors"

const app = express()

//this line solve the cros issue
app.use(cors())

app.get("/",(req,resp)=>{
  resp.send({
    name:"ity",
    age:35,
    email:"ity@gmil.com"
  })
})

app.listen(3200)

