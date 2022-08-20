const Emitter = require('events')
const controllerNotification = require('../../controllers/controller.notification')
const controllerRmq = require('../../controllers/controller.rmq')
const constants = require('../../utils/constants')
let rmqEvents
if(!rmqEvents) rmqEvents = new Emitter()
rmqEvents.on(constants.events.RMQ_CONSUMED, controllerRmq.rmqConsumed)
rmqEvents.on(constants.patterns.PATTERN_AUCTION_START, controllerNotification.auctionStarted)

module.exports = rmqEvents
//module.exports = {rmqEvents} not ork