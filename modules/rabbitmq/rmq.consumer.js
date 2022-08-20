
const TAG = "rmq.consumer.js"

const rmqEventHandler = require('../events/event.handler')
const basicUtils = require('../../utils/basic.utils');
const constants = require('../../utils/constants');


async function receiveFromRabbitMq(queueName, pattern) {

    try {
        let rmqQueue = `${constants.rmq.queuePrefix}_${queueName}`
        if (!global.rmqChannel) {
            throw Error("RabbitMQ channel does not exist")
        }

        const channel = global.rmqChannel;
        await channel.assertQueue(rmqQueue, {
            durable: true,
            persistent: true
        });
        channel.consume(rmqQueue, rmqData => {
            basicUtils.logger(TAG, `Consuming from ${rmqQueue}`)
            if(rmqData) rmqEventHandler.emit(constants.events.RMQ_CONSUMED, rmqData, rmqEventHandler)
            //channel.ack(message);
        });
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