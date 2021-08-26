const { SchemaTypes } = require('mongoose');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var orderSchema = new Schema({
    meals: [String],
    totalPrice: {
        type: Number,
        required: true
    },
    user: {
        ref: 'users',
        type: mongoose.Schema.Types.ObjectId
    }

});

module.exports = mongoose.model('order', orderSchema); // collection
