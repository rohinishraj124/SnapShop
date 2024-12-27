const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    userId : {type : String, required : true},
    products : [{
        productId : {type : String},
        quantity : {type : Number, default : 1}
    }],
    address : {type : String, required : true},
    amount : {type : Number, required : true},
    status : {type : String, default : 'Pending'},
    createdAt : {type : Date, default : Date.now},
    updatedAt : {type : Date, default : Date.now},

}, {timestamps : true});
mongoose.models = {};
module.exports = mongoose.model('Order', orderSchema);