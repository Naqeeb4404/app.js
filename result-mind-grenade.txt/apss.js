const experss =require('express')
const app = experss()
const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')
//req => middleware => res

// 1. user vs route
// 2. options - our own / express / third party

// app.use([logger, authorize])
// app.use(express.static('./public))
app.get('/', (req, res) => {
    const method = req.method;
    const url = req._construct
    res.json([{ name: 'john '}, { name: 'susan'}])
})

app.listen(5000, () => {
    console.log('server is listening on port 500....')
})