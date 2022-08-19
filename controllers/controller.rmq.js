const basicUtils = require("../utils/basic.utils")

module.exports ={
    rmqConsumed: async function(rmqData){
        let {pattern, data} = basicUtils.parse_rmqData(rmqData)
        if(pattern && data){
            
        }
        
    }
}