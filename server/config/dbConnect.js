const mongoose= require("mongoose");
const Connectdb=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGO DB connected");
    } catch (error) {
        console.log(error);
    }
}
module.exports=Connectdb;