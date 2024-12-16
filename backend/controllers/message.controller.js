import Conversation from "../models/conversational.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req,res) => {
    // console.log("Send message", req.params.id);
    try {
        const {message} = req.body;
        const {id: receiverId} = req.params;
        const senderId = req.user._id; // get the id of the logged-in user from req.user

       let conversation = await Conversation.findOne({
            participants:{$all:[senderId, receiverId]}
        });

        if(!conversation){
            conversation = await Conversation({
                participants:[senderId, receiverId]
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        // SOCKET.IO FUNCTIONALITY WILL GO HERE

        // await conversation.save();
        // await newMessage.save();



        // this will run in parallel
        await Promise.all([conversation.save(), newMessage.save()]);

        res.status(201).json(newMessage);

    } catch (error) {
        console.log("Error in sendMessage Controller: ", error.message);
        res.status(500).json({error: "Internal server error "});
    }
}

export const getMessage = async (req, res) => {
    try {
        const {id: userToChatId} = req.params;
        const senderId = req.user._id; // get the id of the logged-in user from req.user
        const conversation = await Conversation.findOne({
            participants:{$all:[senderId, userToChatId]}
        }).populate("messages");// NOT REFERENCE BUT ACTUAL MESSAGES

        if(!conversation) return res.status(200).json([]);

        const messages = conversation.messages;



        res.status(200).json(conversation.messages);
        
    } catch (error) {
        console.log("Error in getMessages Controller: ", error.message);
        res.status(500).json({error: "Internal server error "});
    }
}
