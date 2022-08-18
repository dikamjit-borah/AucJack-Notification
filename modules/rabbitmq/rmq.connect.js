const amqp = require('amqplib/callback_api')

async function setupRabbitMq() {

    return new Promise((resolve, reject) => {
        amqp.connect(`${process.env.RMQ_URL}`, (err, connection) => {
            if (err) {
                console.log(err);
                reject(err)
                return
            }

            connection.createChannel((err, channel) => {
                if (err) {
                    console.log(err);
                    throw err
                }

                global.rabbitMqChannel = channel
            })
            resolve(`RabbitMQ connection established successfully on ${global.rabbitMqChannel}`)
        })

    })
}

module.exports = { setupRabbitMq }