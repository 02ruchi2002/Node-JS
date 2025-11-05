import express from 'express'
import data from './data.json' with {type:'json'}

const app = express()

app.get('/',(req,resp)=>{
    console.log(data)
    resp.send(data)
})

app.get('/user/:id',(req,resp)=>{
    //get dynamic param from url
    let userId = req.params.id
    let filter = data.filter((item)=>item.id == userId)
    console.log(filter)
    resp.send(filter)
})

app.listen(3200)