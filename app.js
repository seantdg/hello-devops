const express = require('express')
const app = express()
const message = require('./message')

app.get('/', (req, res) => res.send(message.getMessage("Martin")))

app.listen(3000)

