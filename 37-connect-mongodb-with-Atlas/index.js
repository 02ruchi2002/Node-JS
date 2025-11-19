import { MongoClient } from "mongodb";


const url = "mongodb+srv://Ruchi:mongo123@cluster0.misfkat.mongodb.net/?appName=Cluster0";
const dbName = "";
const collectionName = "";
const clinet = new MongoClient(url)

clinet.connect().then(()=>{
    console.timeLog("............connect...............")
})

async function dbConnection () {
    const db = clinet.connect(dbName)
    const collection = db.collection(collectionName)
    const reult = await collection.find().toArray()
}

dbConnection()