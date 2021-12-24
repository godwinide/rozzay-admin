const {model, Schema} = require("mongoose");

const HistorySchema = new Schema({
    amount:{
        type: Number,
        required: true
    },
    userID:{
        type: String,
        required: true
    },
    shortID:{
        type: String,
        required: true
    },
    user:{
        type: Object,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    },
    proof:{
        type: String,
        required: false,
    },
    address:{
        type: String,
        required: false,
        default: ""
    },
    date:{
        type: Date,
        required: false,
        default: Date.now()
    }
});

module.exports = History = model("History", HistorySchema);