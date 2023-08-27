const express = require('express')
const connectionDb = require('./config/dbConnnection')
const errorHandler = require("./middleware/errorHandler")
const dotenv = require("dotenv").config();
const router = require('./routes/contactRoutes')


connectionDb()
const app = express()


const port = process.env.PORT || 5001

//router
app.use(express.json())
app.use('/api/contacts/', router)
app.use('/api/users/', require('./routes/userRoutes'))
app.use(errorHandler);


app.listen(`${port}`, () => {
    console.log(`app is listning on port ${port}`)
})





