const express = require('express')
const app = express()
const message = require('./message')

app.get('/', (req, res) => res.send(message.getMessage("Blu")))

app.listen(3000)

