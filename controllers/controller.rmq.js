const basicUtils = require("../utils/basic.utils");
const constants = require("../utils/constants");

module.exports ={
    rmqConsumed: async function(rmqData){
        let {pattern, data} = basicUtils.parse_rmqData(rmqData)
        //console.log(data);
        if(pattern && data){
            console.log(pattern);
            // rmqEventHandler.emit(pattern, "asasasasasa")
            //rmqEventHandler.emit(constants.events.AUCTION_STARTED, data)
            //rmqEventHandler.emit(constants.events.AUCTION_STARTED, data)
        }
        
    }
}