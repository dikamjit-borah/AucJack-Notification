const { emitEvent } = require("../modules/events/event.emitter");
const basicUtils = require("../utils/basic.utils");
const constants = require("../utils/constants");

module.exports = {
    rmqConsumed: async function (rmqData) {
        let { pattern, data } = basicUtils.parse_rmqData(rmqData)
        if (pattern && data) {
            console.log(pattern);
            emitEvent(pattern, data)
        }
    }
}