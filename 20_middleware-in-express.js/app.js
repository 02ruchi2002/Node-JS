import express from "express";

const app = express()

//___________________________________________________________ middleware function
// app.use((req,resp,next)=>{
//     req.url
//    next()
// })

// __________________________________________________________age check middleware function

// function ageCheck (req,resp,next){
//    if(!req.query.url || req.query.age < 18){
//       resp.send("you can not access this page")
//    }else{
//     next();
//    }
// }

// app.use(ageCheck)

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

app.get("/product",checkAgeRouteMiddleware,(req,resp)=>{
   resp.send("<h1>product page</h1>")
})



app.listen(3200)