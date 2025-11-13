// npm i express-session
import express from "express";
import session from "express-session"

const app = express()


app.set('view engine','ejs')
app.use(session({
    secret:'apple'
}))

app.get('/login',(req,resp)=>{
   resp.render('login')
})

app.post("/profile",(req,resp)=>{
   req.session.data = req.body
})

app.get('/',(req,resp)=>{
    const data = req.session.data
    resp.render('home',{data})
})

app.listen(3200)