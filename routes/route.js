const express=require('express')
const mongoose=require('mongoose')
const contact = require('../models/contact')
const router=express.Router()
//crude methode
//methode post
//description post a contact
//path http://localhost:5001/api/contact/
//params body
router.post('/',async(req,res)=>{
    try {
        const newcontact=  new contact(req.body)
       const result=await  newcontact.save()
       res.send({response:result,message:"a contact is added succesfully"})
    } catch (error) {console.log(error)}
        
})
//methode get
//description get all contact
//path http://localhost:5001/api/contact/
//params 
router.get('/',async(req,res)=>{
    try {
        const result=await contact.find();
        res.send({result:result,message:"this is the contact list "})
    } catch (error) {res.status(400).send("can not do it")
        
    }
})
//methode get one by id
//description get one contact
//path http://localhost:5001/api/contact/:id
//params id
router.get('/:id',async(req,res)=>{
     
    try {
        let result = await contact.findOne({ _id: req.params.id });
        res.send({ response: result, message: "get one contact succesfully" });
      } catch (error) {
        res.status(400).send("no contact found with this id");
      }
    })
    //methode delete
    //description delete one contact by id
    //path http://localhost:5001/api/contact/:id
    //params id
    router.delete('/:id',async(req,res)=>{
        try {
            let result= await contact.findOneAndDelete({_id:req.params.id});
            res.send({response:result,message:'the contact is deleted succesfully'})
            console.log(result)
        }
            catch(error){res.status(400).send("can not delet it")}
        })
//methode put
//description update one contact
//path http://localhost:5001/api/contact/:id
//params id body
router.put('/:id',async(req,res)=>{
try{
    let result= await contact.findByIdAndUpdate({_id:req.params.id},{ $set: { ...req.body } });
        res.send(result)
        console.log(result)
    }
    catch(error){res.status(400).send("can not update contact")}})


module.exports=router