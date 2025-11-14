import express from "express";

const app = express()

app.get("/",(req,resp)=>{
   resp.send("home page")
})

app.get("/about",(req,resp)=>{
   resp.send("about page")
})

app.get("/error",(req,resp)=>{
   resp.send("error page")
})

// ____________________________________________error  handling middleware
app.use((error,req,res,next)=>{
    res.status(error.status || 500).send("try again after some time")
})

app.listen(3300)