const amqp = require('amqplib/callback_api')
const config = require('../config.json')



async function sendTormq(queueName, pattern, data){

    rmqQueue = `${config.rmqConfig.queuePrefix}_${queueName}`
    if (!global.rmqChannel) {
        throw Error("rmq channel not available")
    }

    global.rmqChannel.assertQueue( rmqQueue , {
        durable: true,
        persistent: true
    });

    const rmqPayload = new Buffer(
        JSON.stringify({
            pattern,
            data
        }))

    console.log("Sending payload to queue "+ rmqQueue);
    await global.rmqChannel.sendToQueue(rmqQueue, rmqPayload, [{ persistent: true }]);
    console.log("Payload sent");
    
    return;
        
}
module.exports = {sendTormq}



/* 
    amqp.connect('amqp://localhost', (err, connection) =>{
        if(err){
            console.log(err);
            throw err
        }
    
        connection.createChannel((err, channel) =>{
            if(err){
                console.log(err);
                throw err
            }
    
            const queue = 'MEDICINE_DATA'
            channel.assertQueue(queue)
            channel.sendToQueue(queue, Buffer.from("hehehehehehe"))
            console.log("ola");
        })
           
    
    }) */