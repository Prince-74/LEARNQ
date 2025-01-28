const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
    try {
         await mongoose.connect(process.env.MONGO_URI) 
         console.log(`MongoDB are Connected : ${mongoose.connection.host}`.bgGreen.white);
           
        } catch (error) {
            console.log(`Mongodb Error: ${error.message}`.bgRedred.white);
        }
    };

    
module.exports = connectDB;