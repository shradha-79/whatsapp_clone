import axios from 'axios';

const URL = 'http://localhost:8000';

export const addUser = async (data) => {
    try{
        return await axios.post(`${URL}/add`, data)
    }catch(error){
        console.log("Error while api call of adduser", error)
    }
}

export const getUsers = async () => {
    try{
        let response = await axios.get(`${URL}/users`);
        // console.log(response)
        return response;
    }catch(error){
        console.log("Error while api call of getuser", error)
    }
}

export const setConversation = async (data) => {
    try{
        await axios.post(`${URL}/conversation/add`,data);
    }catch(error){
        console.log("Error while api call of setconversation", error)
    }
}

export const getConversation = async (data) => {
    try{
        let response = await axios.post(`${URL}/conversation/get`, data);
        return response.data;
    }catch(error){
        console.log("Error while api call of getConversation ", error)
    }
}

export const newMessage = async (data) => {
    try{
        await axios.post(`${URL}/message/add`, data);        
    }catch(error){
        console.log("Error while api call of newMessage ", error)
    }
}

export const getMessages = async (id) => {
    try{
        return await axios.get(`${URL}/message/get/${id}`);        
    }catch(error){
        console.log("Error while api call of getMessages ", error)
    }
}