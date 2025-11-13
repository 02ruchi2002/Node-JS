// ______________________________________________________ video 61  ___________________________________________
import express from "express"

const app = express()


// middleware
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))


app.get("/login",(req,resp)=>{
  resp.render('login')
})


app.post("/profile",(req,resp)=>{

    // set cookie
    resp.setHeader('Set-Cookie','login=true')
    resp.setHeader('Set-Cookie','name='+req.body.name)


  resp.render('profile')
})


app.get("/",(req,resp)=>{

    // get cookie
    let cookieData = req.get('cookie')
    cookieData = cookieData.split(":")
    console.log(cookieData)
    cookieData = cookieData[1].split("=")
    console.log(cookieData[1])
  resp.render('home')
  // resp.render('home',{name:cookieData[1]})
})


app.listen(3300)