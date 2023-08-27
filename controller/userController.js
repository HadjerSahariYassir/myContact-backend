const asyncHandler = require('express-async-handler')
//@desc Register a user 
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async(req, res) => {
    res.json({message: "Register a contact"})
})

//@desc login a user 
//@route POST /api/users/logun
//@access public
const loginUser =  asyncHandler(async(req, res) => {
    res.json({message: "login a contact"})
})

//@desc  user information
//@route POST /api/users/current
//@access public
const currentUser =  asyncHandler(async(req, res) => {
    res.json({message: "contact information"})
})

module.exports = { registerUser, loginUser, currentUser}