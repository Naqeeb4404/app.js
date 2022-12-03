const os = requie('os')

//info about current user
const user = os.userInfo()
console.log(user);


//method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()}seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMen: os.totalMen(),
    freeMem: os.freeMem()
}
console.log(currentOS)