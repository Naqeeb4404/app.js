const express = require
const app = experss()
const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')
const { Router } = require('express')
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
const person = people.find ((person) => person.id === Number(id))

if (!person) {
    return res
    .status(404)
    .json({ sucess: false, msg: `no person with id ${id}` })
}
const newPeople = people.map((person) => {
    if (person.id ===NUmber (id)) {
        person.name = name
    }
    return person
})
res.status(200).json ({ secess: true, data: newPeople })

Router.delete('/api/people/:id', (req, res) => {
