import mongoose from "mongoose";

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@whatsapp-clone-shard-00-00.9omga.mongodb.net:27017,whatsapp-clone-shard-00-01.9omga.mongodb.net:27017,whatsapp-clone-shard-00-02.9omga.mongodb.net:27017/WHATSAPP?ssl=true&replicaSet=atlas-u0hsji-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true})
        console.log("database connected successfully")
    }
    catch(error){
        console.log('Error whiles connecting to monodb', error);
    }
}

export default Connection;