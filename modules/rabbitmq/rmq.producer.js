const TAG = "rmq.producer.js"

const constants = require('../../utils/constants');
const basicUtils = require('../../utils/basic.utils')

async function sendToRabbitMq(queueName, pattern, data){

    let rmqQueue = `${constants.rmq.queuePrefix}_${queueName}`
    if (!global.rmqChannel) {
        throw Error("RabbitMQ channel does not exist")
    }

    const channel = global.rmqChannel;
    await channel.assertQueue( rmqQueue , {
        durable: true,
        persistent: true
    });

    const rmqPayload =  Buffer.from(
        JSON.stringify({
            pattern,
            data
        }))
    
    basicUtils.logger(TAG, `Sending payload to ${rmqQueue}`)
    try{
        await global.rmqChannel.sendToQueue(rmqQueue, rmqPayload, [{ persistent: true }]);
    }catch(err){
        console.log(err)
        throw Error(err)
    }
    return;
        
}
module.exports = {sendToRabbitMq}
