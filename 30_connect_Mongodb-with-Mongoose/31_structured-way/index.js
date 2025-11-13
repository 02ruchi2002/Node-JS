//get rest api with mongoose to fetch data from mongodb

import express from "express"
import mongoose from "mongoose"
import studentModel from "./model/studentModel.js"

const app = express()

app.use(express.json)

await mongoose.connect("mongodb://localhost:27017/school").then(() => {
})

app.get("/", async (req, resp) => {
    const studentData = await studentModel.find()
    resp.send(studentData)
})

// 32 ++++++++++++++++++++++++++++++++++++ POST api +++++++++++++++++++++++++++++++++++++++++++

app.post("/save", async (req, resp) => {
    const studentData = await studentModel.create(req.body)
    const { name, age, email } = req.body
    if (!req.body || !name || !age || !email) {
        resp.send({
            message: "data not stored",
            success: false,
            storedData:null
        })
        return false;
    } else {
        resp.send({
            message: "data stored",
            success: true,
            storedData: studentData
        })
    }
})

// 33 ++++++++++++++++++++++++++++++++++++ PUT api to update previous data +++++++++++++++++++++++++++++++++++++++++++

app.put("/update/:id",async(req,resp)=>{
    const id = req.params.id
    const studentData = await studentModel.findByIdAndUpdate(id,{...req.body})
    resp.send({
        message:"data updated",
        success:true,
        result:studentData
    })
})

// 34 ++++++++++++++++++++++++++++++++++++ DELETE api +++++++++++++++++++++++++++++++++++++++++++

app.delete("/update/:id",async(req,resp)=>{
    const id = req.params.id
    const studentData = await studentModel.findByIdAndDelete(id)
    resp.send({
        message:"data deleted",
        success:true,
        result:studentData
    })
})

app.listen(3200)