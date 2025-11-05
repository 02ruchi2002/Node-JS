import express from 'express'
import { MongoClient, ObjectId } from 'mongodb'

const dbName = 'school'
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)

const app = express()

app.set('view engine', 'ejs')                              // this line related to line no 18

app.use(express.urlencoded({ extended: true }))           // this line related to line no 32 to get reqest body,dynamic params
app.use(express.json())                                   // this line related to make post method api

client.connect().then((collections) => {
    const db = client.db(dbName)
    app.get("/add", (req, resp) => {
        resp.render('add_student')
    })

    app.post("/add-student", async (req, resp) => {
        // req.body                                 // to get form input value
        const collection = db.collection('students')
        const result = await collection.insertOne(req.body)

        resp.send("data added")
    })

    // =29=  ___________________________make post method rest api_____________________________
    app.post("/add-student-api", async (req, resp) => {

        const { name, age, email } = req.body

        if (!name || !age || !email) {
            resp.send({ message: "operation faile", success: false })
            return false
        } else {
            const collections = db.collection("students")
            const result = await collections.insertOne(req.body)

            resp.send({ message: "data stored", success: true, result: result })
            // resp.send({message:result})
        }

        // console.log(req.body)
    })

    // =30=  ___________________________make delete method rest api_____________________________

    app.delete("/delete/:id", async (req, resp) => {
        const id = req.params.id
        const collections = db.collection("students")
        const result = await collections.deleteOne({ _id: new ObjectId(id) })

        if (result) {
            resp.send({
                message: "students data deleted",
                success: true,
            })
        } else {
            resp.send({
                message: "students data not deleted, try after some time",
                success: false,
            })

        }
    })
})



app.listen(3200)