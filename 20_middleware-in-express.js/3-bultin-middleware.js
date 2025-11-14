import express from "express";

const app = express()

app.get("/",(req,resp)=>{
   resp.send("<h1>home page</h1>")
})


// bultin middleware iss se hum req ki body get kr sakte h iss k bina hum input k text nhi get kr sakte 
app.use(express.urlencoded({extended:false}))

app.get("/login",(req,resp)=>{
   resp.send(`\
    <form action="/submit" method="post">
      <input type="text" placeholder="enter your name" name="name"/>
     <input type="text" placeholder="enter your password" name="password"/>
     <button type='submit'>Submit</button>
    </form>
    `)
})

app.post("/submit",(req,resp)=>{
    console.log(req.body)
   resp.send("loged in")
})


app.get("/about",(req,resp)=>{
   resp.send("<h1>about page</h1>")
})

app.listen(3200)