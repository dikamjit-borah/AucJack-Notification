
const TAG = "rmq.consumer.js"

const basicUtils = require('../../utils/basic.utils');
const constants = require('../../utils/constants');


async function receiveFromRabbitMq(queueName, pattern) {

    try {
        if (!global.rmqChannel) {
            console.log("whaa");
            throw Error("rmq channel not available")
        }
        let rmqQueue = `${constants.rmq.queuePrefix}_${queueName}`
        const channel = global.rmqChannel;

        await channel.assertQueue(rmqQueue, {
            durable: true,
            persistent: true
        });
        channel.consume(rmqQueue, rmqData => {
            basicUtils.logger(TAG, `Consuming from ${rmqQueue}`)
            console.log(`Received data: ${JSON.stringify(JSON.parse(rmqData.content.toString()))}`);
            //channel.ack(message);
        });
        console.log(`Waiting for messages...`);
    } catch (err) {
        console.error(err);
    }

    return;

}
module.exports = { receiveFromRabbitMq }



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