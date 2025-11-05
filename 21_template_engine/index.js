import express from 'express'

const app = express()

// set template engine
app.set('view engine','ejs')

app.get("/",(req,resp)=>{
   resp.render('home',{name:"nodejs",topic:"embended javascript"})
})

app.get("/users",(req,resp)=>{
   const users = ["pooja","rahul","ravi","neha","palak","nikita"]
   resp.render('users',{users:users})
})

app.listen(3300)