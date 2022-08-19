const Emitter = require('events')
const controllerRmq = require('../../controllers/controller.rmq')
const constants = require('../../utils/constants')
const rmqEvents = new Emitter()
rmqEvents.on(constants.events.RMQ_CONSUMED, controllerRmq.rmqConsumed)

module.exports = rmqEvents
//module.exports = {rmqEvents} not ork