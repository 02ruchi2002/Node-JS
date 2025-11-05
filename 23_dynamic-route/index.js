import express from 'express'

const app = express()

app.get("/",(req,resp)=>{
 const userName = ["pooja","rahul","neha","palak"]
 let data = `<ul>`
    for(let i=0;i<userName.length;i++){
    data+=`<li><a href="user/${userName[i]}">${userName[i]}</a></li>`
 }
 data+=`</ul>`
 resp.send(data)
 
})

app.get('/user/:name',(req,resp)=>{
  const name = req.params.name
  resp.send(`this is ${name} profile page`)
})

app.listen(3200)