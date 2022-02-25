import User from "../model/User.js";

//it is called during login on Login.js through api.js
export const addUser = async (request, response) => {
    try{
        //checking if already user exist or not
        let exist = await User.findOne({ googleId: request.body.googleId });
        if(exist) {
            response.status(200).json('user already exist');
            return;
        }
        const newUser = User(request.body);
        await newUser.save();
        console.log("j1")
        response.status(200).json('user saved successfully');
    }
    catch(error){
        response.status(500).json(error);
    }
    
}

export const getUsers = async (request, response) => {
    try{
        let users = await User.find();
        response.status(200).json(users);
    }
    catch(error){
        response.status(500).json(error);
    }
    
}