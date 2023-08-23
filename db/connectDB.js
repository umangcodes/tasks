const mongoose = require("mongoose")

async function connectDB(connectionString){
    console.log("connecting to db...")
    mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    const connection = await mongoose.connection
    connection.once('open', () => {
        console.log("DB connected.");
    })
}





module.exports = connectDB