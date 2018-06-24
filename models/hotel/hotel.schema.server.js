var mongoose = require('mongoose');

var hotelSchema = mongoose.Schema({
    owners: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OwnerModel'
    },
    name: String,
    location: {
        latitude: Number,
        longitude: Number
    },
    address: String,
    phone: Number,
    customers: [String],
    rate: Number
}, {collection: 'hotel'});

module.exports = hotelSchema;