const rmqEvents = require("../modules/events/event.handler");
const basicUtils = require("../utils/basic.utils");
const constants = require("../utils/constants");

module.exports ={
    rmqConsumed: async function(rmqData){
        let {pattern, data} = basicUtils.parse_rmqData(rmqData)
        //console.log(data);
        if(pattern && data){
            console.log(pattern);
            // rmqEvents.emit(pattern, "asasasasasa")
            //rmqEvents.emit(constants.events.AUCTION_STARTED, data)
            //rmqEvents.emit(constants.events.AUCTION_STARTED, data)
        }
        
    }
}