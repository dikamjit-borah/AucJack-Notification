const amqp = require('amqplib/callback_api')
const util = require('util');
const basicUtils = require('../../utils/basic.utils');

async function setupRabbitMq() {

    return new Promise((resolve, reject) => {
        amqp.connect(`${process.env.RMQ_URL}`, async(err, connection) => {
            if (err) {
                console.log(err);
                reject(err)
                return
            }

            const channel = await new Promise((resolve, reject)=>{
                connection.createChannel((err, channel) => {
                    if (err) {
                        console.log(err);
                        reject(err)
                        return
                    }
    
                    global.rmqChannel = channel
                    resolve(global.rmqChannel)
                })
    
            })
            resolve(`RabbitMQ connection established successfully on ${basicUtils.simpleStringify(channel)}`)
        })

    })
}

module.exports = { setupRabbitMq }