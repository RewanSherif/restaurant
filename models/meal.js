var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var MealSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    categoryName: {
        type: String,
        required: true
    },

    price: {
        type: Number
    },


});

module.exports = mongoose.model('meal', MealSchema); // collection
