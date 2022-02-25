import Conversation from '../model/conversation.js';

export const newConversation = async (request, response) => {
    let senderId = request.body.senderId;
    let recieverId = request.body.recieverId;
    try {
        //checking if that convo details already exist or not
        const exist = await Conversation.findOne({ members: { $all: [recieverId, senderId] } });
        if (exist) {
            response.status(200).json('convo already exist')
            return;
        }
        const newConversation = new Conversation({
            members: [senderId, recieverId]
        })
        await newConversation.save();
        response.status(200).json('new convo added successfully')
    } catch (error) {
        response.status(500).json(error);
    }
}

export const getConversation = async (request, response) => {
    try {
        const conversation = await Conversation.findOne({ members: { $all: [request.body.sender, request.body.receiver]}});
        response.status(200).json(conversation)
    } catch (error) {
        response.status(500).json(error);
    }
}
