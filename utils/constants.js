module.exports={
    patterns: {
        PATTERN_AUCTION_START: "PATTERN_AUCTION_START",
        PATTERN_AUCTION_END: "PATTERN_AUCTION_END"
    },
    events:{
        RMQ_CONSUMED: "EVENT_RMQ_CONSUMED",
        AUCTION_STARTED: "EVENT_AUCTION_STARTED"
    },
    rmq:{
        queuePrefix: "AUCJACK",
        queueNotification: "QUEUE_NOTIFICATION"
    }
}