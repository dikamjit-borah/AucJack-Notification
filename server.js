require('dotenv').config()

const TAG = "server.js"
const express = require('express')
const cors = require('cors');
const mail = require('./modules/nodemailer/mailer');
const { setupRabbitMq } = require('./modules/rabbitmq/rmq.connect');
const basicUtils = require('./utils/basic.utils')
const app = express()

//const jobs = require('./services/jobs');
//const { setupRabbitMq } = require('./rmq/rmq.start');

const port = process.env.PORT || 7074;
var corsOptions = {
  origin: `${process.env.HOST}:${port}`,
};

app.use(cors())
app.use(express.json())

app.listen(port, () => {
  basicUtils.logger(TAG, `AucJack-Notification running on port ${port}`)
  setupRabbitMq().then((message) => {
    basicUtils.logger(TAG, message)
  });
  //mail.sendMail()
});




