//  npm i nodemailer

import express from 'express'

const app = express()

// template engine set
app.set('view engine','ejs')

// middlware to get body
app.use(express.urlencoded({extended:false}))

app.get("/mail",(req,resp)=>{
   resp.render('mail')
})

app.post("/submit-email",(req,resp)=>{
    // const {subject , email} = req.body
    console.log(req.body)
})

app.listen(3200)