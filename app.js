const {createReadStream} = require('fs')

const stream = createReadStream('../content/big.txt', {
    highWaterMark: 90000,
})

//default 64kb
//last buffer - remainder
//highWaterMark - control size
//const stream = createReadStream('./content/big.txt', { higtWaterMark:9000 })
//const stream = createReadStream('../content/big.txt', { encoding: 'utf8'}

stream.on('data', (result) => {
    console.log(result)
})
conts http = require('http')

conts server = http.createServer((req, res) => {
    //console.log(req.method)
    const url = req.url
    //home page
}
if (url === '/') {
    res.writeHead(200, {'content-type': 'text/heml' })
    res.write('<h1>Home page</h1>')
    res.end()
}
//about page
else if (url === '/about') {
    res.writeHead(200, {'content-type': 'text/html' })
    res.white('<h1>about page</h1>')
    res.end()
}
//404
res.writeHead(200, {'content-type': 'text/html' })
res.white('<h1>about page</h1>')
res.end()