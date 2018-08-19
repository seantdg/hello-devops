var express = require('express')
var app = express()
var message = require('./message')

app.get('/', (req, res) => res.send(message.getMessage("Blu")))

app.listen(3000)

