const express=require('express')
const mongoose=require('mongoose')
const { Schema } = mongoose;
// define a schema
const contactSchema = new Schema({
    name: {type:String,required:true },
    age:{type:String,required:true},
     phonenumber:{type:String,required:false},
  });

  
  module.exports=contact=mongoose.model('contact', contactSchema);