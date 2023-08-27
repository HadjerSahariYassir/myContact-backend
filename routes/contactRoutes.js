const express = require('express')
const { getContacts,getContactById, createContacts, editContact, deleteContact} = require('../controller/contactController')

const router = express.Router()

//get conatcts
router.route("/").get(getContacts)

//get one conatct
router.route("/:id").get(getContactById)
//create a contact
router.route('/').post(createContacts)

//edit a conatct
router.route("/:id").put(editContact)

//delete a conatct
router.route("/:id").delete(deleteContact)

module.exports = router