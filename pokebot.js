const getGreetings = require('./intents/greetings.js')
const getInfoPokemon = require('./intents/infopokemon.js')

const config = require('./config.js')
const restify = require('restify')
const builder = require('botbuilder')

const recast = require('recastai')

// Connection to Microsoft Bot Framework
const connector = new builder.ChatConnector({
  appId: config.appId,
  appPassword: config.appPassword,
})

const bot = new builder.UniversalBot(connector)

const INTENTS = {
    greetings: getGreetings,
    infopokemon: getInfoPokemon,
}

// Event when Message received
// Event when Message received
bot.dialog('/', (session) => {
  recastClient.textRequest(session.message.text)
 .then(res => {
   const intent = res.intent()
   const entity = res.get('pokemon')
   if (intent) {
       session.send(INTENTS[intent.slug](entity))
   }
 })
 .catch(() => session.send('I need some sleep right now... Talk to me later!'))
})

// Server Init

const server = restify.createServer()
server.listen(8080)
server.post('/', connector.listen())

//Recast bot Connection

const recastClient = new recast.Client(config.recast)