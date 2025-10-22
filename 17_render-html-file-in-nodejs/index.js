import express from 'express'
import path from 'path'

const app = express()

app.get('/',(req,resp)=>{
    const absolutePath = path.resolve('view/home.html')
   resp.sendFile(absolutePath)
})


app.get('/',(req,resp)=>{
    const absolutePath = path.resolve('view/home.html')
   resp.sendFile(absolutePath)
})

app.use((req,resp)=>{
    const absolutePath = path.resolve('view/18_404.html')
   resp.sendFile(absolutePath)
})
app.listen(3300) 



// kisi bhi html file ko nodejs mai render krne k liya uska absolute path dena hota h
//  iske liya path and reslove ka use krte h 