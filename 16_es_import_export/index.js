
import express from 'express'
import { home } from './home.js'
import { about } from './about.js'
import { login } from './login.js'
import { submit } from './submit.js'

const app = express()

app.get('',(req,resp)=>{
   resp.send(home())
})

app.get('/about',(req,resp)=>{
   resp.send(about())
})

app.get('/login',(req,resp)=>{
   resp.send(login())
})

app.post('/submit',(req,resp)=>{
   resp.send(submit())
})



app.listen(3200)