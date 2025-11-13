// __________________________________________________ 58 th video  _____________________________________________________

import express from "express"

const app = express()

app.get("/",(req,resp)=>{
  resp.send(`
    <form>
    <input action="/upload" method="post" enctype="multipart/form-data" placeholder="choose file"/>
    <button>upload file</button>
    </form>
    `)
})

app.post("/upload",(req,resp)=>{
  resp.send({
    message:"file uploaded",
    info:null
  })
})

app.listen(3200)