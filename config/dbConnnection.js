const mongoose = require('mongoose')


const connectionDb = async() => {
   try{
    console.log("connection uril",process.env.CONNECTION_STRING)
    const connect = await mongoose.connect(process.env.CONNECTION_STRING)
    console.log(
    "host:",connect.connection.host,
    "name", connect.connection.name
    );
   }catch(err){
    console.log("err db",err.message)
    process.exit(1);
   }
   
}

module.exports = connectionDb;
