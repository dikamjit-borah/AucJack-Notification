const Emitter = require('events')
const controllerNotification = require('../../controllers/controller.notification')
const controllerRmq = require('../../controllers/controller.rmq')
const constants = require('../../utils/constants')
let rmqEventHandler
if(!rmqEventHandler) rmqEventHandler = new Emitter()
rmqEventHandler.on(constants.events.RMQ_CONSUMED, controllerRmq.rmqConsumed)
rmqEventHandler.on(constants.patterns.PATTERN_AUCTION_START, controllerNotification.auctionStarted)

module.exports = rmqEventHandler
//module.exports = {rmqEventHandler} not ork