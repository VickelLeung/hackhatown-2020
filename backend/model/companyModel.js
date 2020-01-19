const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const companyModel = new Schema({
    companyName:{type:String, require: true},
    address:{type:String, require:true},
    foodType:{type:String, require:true},
    email:{type:String, require:true},
    password:{type:String, require:true},
    date: {type: Date, require:true},
    isPickup: {type: Boolean, require:true}
})

const Company = mongoose.model("Company", companyModel);

module.exports = Company;

