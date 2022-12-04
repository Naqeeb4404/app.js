const experss =require('express')
const app = experss()

//req => middleware => res


app.get('/', (req, res) => {
    const method = req.method;
    const url = req._construct
    res.json([{ name: 'john '}, { name: 'susan'}])
})

app.listen(5000, () => {
    console.log('server is listening on port 500....')
})