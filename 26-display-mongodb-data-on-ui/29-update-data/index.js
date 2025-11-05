import express from "express"
import { MongoClient, ObjectId } from "mongodb"

const dbName = "school"
const url = "mongodb://localhost:27017"
const client = new MongoClient(url)

const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))


client.connect().then((collections) => {
    const db = collections.db(dbName)

    app.get('/ui', async (req, resp) => {
        const collection = db.collection("students")
        const result = await collection.find().toArray()
        // console.log(result)
//         ejs file name_____data sending in ejs file   
        resp.render('tabel', { result })
    })
    //___________________________________data populate(show) inside form

    app.get('/ui/student/:id', async (req, resp) => {
        const collection = db.collection("students")
        const result = await collection.findOne({ _id: new ObjectId(req.params.id) })
        resp.render('form', { result })
    })


//____________________________________________________________________ get api for get single student detail bases on id 

    //    app.get('/student/:id', async (req, resp) => {
    //         // const id = req.body.id
    //     const collection = db.collection("students")
    //     const result = await collection.findOne({_id: new ObjectId(req.params.id)})
    //     resp.send({
    //         message:"data fetch succefully",
    //         success:true,
    //         result:result
    //     })
    // })

// ========================================== UPDATE DATA =============================================================    


    app.post("/ui/update/:id", (req, resp) => {
        const collection = db.collection("students")
        const filter = { _id: new ObjectId(req.params.id) }
        const update = { $set: req.body }
        const result = collection.updateOne(filter, update)

        if (result) {
            resp.send("data updated")
        } else {
            resp.send("data not updated")
        }
    })

//________________________________________________ put api to update data because when we update data way api its put not post

    app.put("/ui/update/:id", (req, resp) => {
        const collection = db.collection("students")
        const filter = { _id: new ObjectId(req.params.id) }
        const update = { $set: req.body }
        const result = collection.updateOne(filter, update)

        if (result) {
            resp.send({
                message: "data updated succefully",
                success: true,
                result: req.body                   // to show updated data
            })
        } else {
            resp.send({
                message: "data not updated ",
                success: false,
                result: null
            })
        }
    })



})



app.listen(3200)