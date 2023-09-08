const os = require('os')

// info about current user
const user = os.userInfo()

console.log(user)
console.log(`The Syatem Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name:os.release(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)