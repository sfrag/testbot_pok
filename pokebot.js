const config = require('./config.js')
const restify = require('restify')
const builder = require('botbuilder')
const server = restify.createServer().listen(8080)

//Connection to Microsoft Bot Framework