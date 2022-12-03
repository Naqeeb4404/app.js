var htpp = require ('http')
var fs = require('fs')

http
.createServer(funtion (req, res){
    //const text = fs.readFileSync('./content/big.txt', 'utf8')
    //res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt','utf8');
    fileStream.on('open',() =>{

    })
}
fileStream.on('error'),(err)=>{
    res.end(err)
})
})