const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;


var ProductSchema = new Schema({
  title:{type: String},
    nameproduct: { type: String,lowercase: true },
    description:{type:String,lowercase: true},
    color: { type: String},
    price:{type:Number},
    image: {type: String },
    catalog:{ type: String},
});

module.exports = mongoose.model('Product', ProductSchema);
