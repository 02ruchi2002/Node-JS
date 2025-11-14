//    (1) core modules                  by defult modules inside node.js
//       (2) third party modules          externally installed
//          (3) custom modules              crate your self



// _____________________ CORE MODULE of node ___________________________

// 1.  create a file with help of core module

const fs = require('fs')

fs.writeFileSync("dummy.txt","trying with modules")


// 2. 
const os = require('os')

console.log(os.platform())


// 3.
const {log} = require('console')

log("custom log")