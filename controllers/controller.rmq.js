const { emitEvent } = require("../modules/events/event.emitter");
const basicUtils = require("../utils/basic.utils");
const constants = require("../utils/constants");

module.exports ={
    rmqConsumed: async function(rmqData){
        let {pattern, data} = basicUtils.parse_rmqData(rmqData)
        //console.log(data);
        if(pattern && data){
            console.log(pattern);
            emitEvent(pattern, data)
            // rmqEventHandler.emit(pattern, "asasasasasa")
            //rmqEventHandler.emit(constants.events.AUCTION_STARTED, data)
            //rmqEventHandler.emit(constants.events.AUCTION_STARTED, data)
        }
        
    }
}