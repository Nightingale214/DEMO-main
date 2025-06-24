const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect(process.env.DB_URI).then(()=>{
        console.log("MongoDB connected successfully");
    })
}

module.exports = connectDB;