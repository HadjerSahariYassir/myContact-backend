const asyncHandler = require('express-async-handler')

const Contact = require('../models/contactModel')
// get all
const getContacts = asyncHandler(async(req, res) => {
    const contacts = await Contact.find();
    res.status(200).json({ message: contacts})
})

//get contact by id
const getContactById = asyncHandler(async (req, res) => {
    const contact = await Contact.findOne({_id: req.params.id});
    if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
    }
    res.status(200).json(contact);
  });

//post
const createContacts = asyncHandler(async(req, res) => {
    const { name, email, phone} = req.body;
    console.log("name ,,,", name,email,phone)
    if( !name || !email || !phone){
        res.status(400)
        throw new Error("all fileds are required")
    }
    const contact =  await Contact.create({
        name,
        email,
        phone
    })
   
   res.status(201).json({ message: contact})
})

//put
const editContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(
        req.params.id
    )
    if (contact == null) {
        res.status(404);
        throw new Error("Contact not found");
      }
    const updatedContact = await Contact.findByIdAndUpdate(
     req.params.id,
     req.body,
     { new: true}
    );
    res.status(200).json(updatedContact);
})

//delete
const deleteContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(
        req.params.id
    )
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
      }
    await Contact.deleteOne({_id: req.params.id})
    res.status(200).json({ message: "delete a contact"})
})

module.exports = { getContacts, getContactById, createContacts, editContact, deleteContact}