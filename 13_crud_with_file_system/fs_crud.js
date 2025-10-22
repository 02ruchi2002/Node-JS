
const fs = require('fs')

const argv = process.argv

const operation = argv[2]

if(operation=="write"){
  let fileName = argv[3]
  let fileText = argv[4]
  fs.writeFileSync('files/'+fileName+'.txt',fileText)
}else if (operation == "read"){
    let fileName = argv[3]
   let data =  fs.readFileSync('file/'+fileName+".txt",'utf-8')
   console.log(data)
}else if(operation == "update"){
    let fileName = argv[3]
    let text = argv[4]
    fs.appendFileSync('file/'+fileName+'.txt',text)
}else if(operation == "delete"){
    let fileName = argv[3]
    fs.unlinkSync('file/'+fileName+'.txt')
}else{
    "operation not found"
}


// ________________________________________________________________________________________________________________


// _______ 1. create file _________________

// fs.writeFileSync('files/apple.txt',"this is a fruit")
// fs.writeFileSync('files/banana.txt',"this fruits we buy in durjans")
// fs.writeFileSync('files/kiwi.txt',"this is expensive fruit")

// _______ 2. read file _________________

// let text = fs.readFileSync('files/banana.txt','utf-8')

// console.log(text)

// _______ 3. update file _________________

// fs.appendFileSync('files/kiwi.txt',"this fruit is very ")

// _______ 4. delete file _________________

// fs.unlinkSync('files/banana.txt')


