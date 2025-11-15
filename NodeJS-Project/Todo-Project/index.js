import express from "express"
import path from 'path'
import { MongoClient, ObjectId } from "mongodb"


const dbName = 'nodejs-project'
const collectionName = 'todo'
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url) 


const app = express()

 // __________________  middleware  __ app.use()

//  to add css file
const publicPath = path.resolve('public')
app.use(express.static(publicPath))

app.use(express.urlencoded({extented:false}))


// _____________ template engine for ejs file _______________

app.set('view engine','ejs')                 // related to line no => 41,45,49  without this line will not work



const connection = async() =>{
  const connect = await client.connect()
  return await connect.db(dbName)
}



// get route for getting data from mongoDB to show on UI
app.get('/',async(req,resp)=>{
       const db = await connection()
   const collection = db.collection(collectionName)
   const result = await collection.find().toArray()
   resp.render('todo-list',{result})
})

app.get('/add',(req,resp)=>{
   resp.render('add')
})

app.get('/update',(req,resp)=>{
   resp.render('update')
})

app.post('/update',(req,resp)=>{
    // ek route se dusare route pr redirect
   resp.redirect('/')
})

// post route for adding data in mongodb by UI
app.post('/add',async(req,resp)=>{
   const db = await connection()
   const collection = db.collection(collectionName)
   const result = collection.insertOne(req.body)
   if(result){
   resp.redirect('/')
   }else{
   resp.redirect('/add')
   }
})


// delete route for delete one data in mongodb by UI
app.get('/delete/:id',async(req,resp)=>{
   const db = await connection()
   const collection = db.collection(collectionName)
   const result = collection.deleteOne({_id:new ObjectId(req.params.id)})
   if(result){
   resp.redirect('/')
   }else{
   resp.redirect('some error')
   }
})


//  route for populate data on form before updating it in mongodb by UI
app.get('/update/:id',async(req,resp)=>{
   const db = await connection()
   const collection = db.collection(collectionName)
   const result = await collection.findOne({_id:new ObjectId(req.params.id)})
   if(result){
   resp.render('update',{result})
   }else{
   resp.redirect('some error')
   }
})

// post route for updating data in mongodb by UI
app.post('/update/:id',async(req,resp)=>{
   const db = await connection()
   const collection = db.collection(collectionName)
//    const result = await collection.findOne({_id:new ObjectId(req.params.id)})
   const filter = {_id:new ObjectId(req.params.id)}
   const update = {$set:{title:req.body.title,description:req.body.description}}
   const result = await collection.updateOne(filter,update)
   if(result){
   resp.redirect('/')
   }else{
   resp.redirect('some error')
   }
})

// post route for delete multiple task from data at a time in mongodb by UI
app.post('/multi-delete',async(req,resp)=>{
   const db = await connection()
   const collection = db.collection(collectionName)
   let selectedTask = undefined;
   if(Array.isArray(selectedTask)){
    selectedTask = req.body.selectedTask.map((id)=>new ObjectId(id))
   }else{
    selectedTask = [new ObjectId(req.body.selectedTask)]
   }
   const result = await collection.deleteMany({_id:{$in:selectedTask}})
   if(result){
   resp.redirect('/')
   }else{
   resp.redirect('some error')
   }
})


app.listen(3200)