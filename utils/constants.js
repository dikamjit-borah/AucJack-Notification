module.exports={
    db:{
        TBL_VENDOR_ITEMS: "vendor_items",
        TBL_BIDS: "bids",
        TBL_AUCTION_ITEMS: "auction_items"
    },
    messages:{
        SOMETHING_WRONG: "Something went wrong. Please try again",
        
        DB_CONN_SUCCESS: "Database connection established successfully",
        DB_CONN_ERROR: "Database connection could not be established",
        
        SOCK_CONN_CREATE: "Socket connection created successfully",
        SOCK_CONN_SUCCESS: "Socket connection established successfully",
        SOCK_CONN_ERROR: "Socket connection could not be established",

        ITEM_POST_SUCCESS: "Item posted successfully",
        ITEM_POST_ERROR: "Item could not be posted. Please try again",

        ITEMS_FETCH_SUCCESS: "Items fetched successfully",
        ITEMS_FETCH_EMPTY: "No items found",
        ITEMS_FETCH_ERROR: "Items could not be fetched. Please try again",

        AUCTION_CONN_SUCCESS: "Connected to auction of item",
        AUCTION_BID_SUCCESS: "Bid placed successfully",
        AUCTION_BID_ERROR: "Bid could not be placed. Please try again",

        JOB_AUCTION_SET: "Auction scheduled successfully",
        JOB_AUCTION_START: "Auction started",
        JOB_AUCTION_END: "Auction ended",
        JOB_SCHEDULED: "New job scheduled"
    },
    endpoints: {
        vendor:{
            postItem: "/vendor/postItem",
            startBid: "vendor/startBid",
            endBid: "/vendor/endBid"
        },
        vendee:{
            viewItems: "/vendee/viewItems",
        },
        auction:{
            auctionItem: "/auction/item",
            postBid: "/auction/postBid"
        }
        
    },
    events: {
        EVENT_EMIT_SUCCESS: "Event emitted successfully",
        EVENT_POST_BID: "EVENT_POST_BID",
        EVENT_EMIT_TIMESTAMP: "EVENT_EMIT_TIMESTAMP",
        EVENT_JOB_SCHEDULED: "EVENT_JOB_SCHEDULED"
    }
}