const eventEmitter = new (require('events').EventEmitter)();

function emitEvent(...args) {
    eventEmitter.emit(...args);
}

function registerEvent(str, callback) {
    'use strict';
    eventEmitter.on(str, callback);
}

function registerEventOnce(str, callback) {
    'use strict';
    eventEmitter.once(str, callback);
}

exports.emitEvent = emitEvent;
exports.registerEvent = registerEvent;
exports.registerEventOnce = registerEventOnce;