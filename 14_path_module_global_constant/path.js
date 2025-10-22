// path module     

const path = require('path')
const file = './6_request.js'

console.log(path.extname(file))
console.log(path.dirname(file))
console.log(path.basename(file))

console.log(path.isAbsolute(file))


//global constant

console.log(__dirname)
console.log(__filename)