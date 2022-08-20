const mailer = require('../modules/nodemailer/mailer')
module.exports = {
    auctionStarted: async function(data){
        const {itemId, scheduledAuctionStartDatetime, scheduledAuctionEndDatetime} = data
        const subject = "AUCTION STARTED"
        const body = `Dear user, Auction started for ${itemId} from ${scheduledAuctionStartDatetime} and will end in 45 mins.`
       console.log("sending mail");
        //await mailer.sendMail(subject, body)
        //call nodemailer
    }
}