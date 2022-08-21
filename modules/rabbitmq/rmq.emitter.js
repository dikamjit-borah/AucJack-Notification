const controllerNotification = require('../../controllers/controller.notification');
const controllerRmq = require('../../controllers/controller.rmq');
const constants = require('../../utils/constants');
const { registerEvent } = require('../events/event.emitter');

const rmqEmitter = function(){
    registerEvent(constants.events.RMQ_CONSUMED,  controllerRmq.rmqConsumed)
    registerEvent(constants.patterns.PATTERN_AUCTION_START, controllerNotification.auctionStarted)
}

///rmqEmitter.emitEvent('fireEvent');

module.exports = rmqEmitter