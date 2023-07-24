const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
    }catch(error){
        console.log(`Error : ' ${error.message}`);
        process.exit();
    }
};

module.exports = connectDB;