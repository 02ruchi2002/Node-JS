import express from "express";

const app = express()

// __________________________________________________________ route middleware function

function checkAgeRouteMiddleware (req,resp,next){
    // console.log(req.query.age)
   if(!req.query.url || req.query.age < 18){
      resp.send("you can not access this page")
   }else{
    next();
   }
}


app.get("/",(req,resp)=>{
   resp.send("<h1>home page</h1>")
})

app.get("/login",(req,resp)=>{
   resp.send("<h1>login page</h1>")
})

app.get("/admin",checkAgeRouteMiddleware,(req,resp)=>{
   resp.send("<h1>admin page</h1>")
})

app.get("/about",(req,resp)=>{
   resp.send("<h1>about page</h1>")
})

//                  iss middleware k baad hum 2,3 jitne bhi middleware laga sakte h 
app.get("/product",checkAgeRouteMiddleware,(req,resp)=>{
   resp.send("<h1>product page</h1>")
})



app.listen(3200)