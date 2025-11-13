import express from "express";
import { MongoClient } from "mongodb";

const dbName = 'school'
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)

const app = express()


// // showing data on ui        this is a old and normal way to connect nodejs with mongodb

// app.set('view engine','ejs')           // this line related to line no 20 to show data in ejs file

// app.get('/', async(req,resp)=>{
//   await client.connect()
//   const db = client.db(dbName)
//   const collections  = db.collection('students')
//   const students  = await collections.find().toArray()
//    resp.render('students',{students})
// })

// ________________________________________________________________________________________________________________________________


// =27=  REST API with mongodb and nodejs    this is current and suggested way to connect node with momngodb and make api


app.set('view engine','ejs')           //  this line is related to line no 44  to show data in ejs file on UI

client.connect().then((connections)=>{

   const db = connections.db(dbName)

   app.get("/api",async(req,resp)=>{

      const collection = db.collection('students')
      const students = await collection.find().toArray()

      resp.send(students)
   })

   app.get("/ui",async(req,resp)=>{
       const collection = db.collection('students')
       const students = await collection.find().toArray()
       resp.render('students',{students})
   })
})

app.listen(3200)