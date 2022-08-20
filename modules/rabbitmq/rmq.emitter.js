const controllerNotification = require('../../controllers/controller.notification');
const controllerRmq = require('../../controllers/controller.rmq');
const constants = require('../../utils/constants');
const rmqEmitter = require('../events/event.emitter');

rmqEmitter.registerEvent(constants.events.RMQ_CONSUMED,  controllerRmq.rmqConsumed)
rmqEmitter.registerEvent(constants.patterns.PATTERN_AUCTION_START, controllerNotification.auctionStarted)
///rmqEmitter.emitEvent('fireEvent');

module.exports = rmqEmitter