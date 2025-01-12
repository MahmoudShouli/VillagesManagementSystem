/* eslint-disable react/prop-types */
import { useAdmin } from '../AdminContext'
import { useState, useEffect } from 'react'
import { useQuery, gql, useMutation} from '@apollo/client'

const CREATE_MESSAGE = gql`
    mutation CreateMessage($sender: String, $receiver: String, $content: String, $timestamp: Date) {
        createMessage(sender: $sender, receiver: $receiver, content: $content, timestamp: $timestamp) {
            sender
            receiver
            content
            timestamp
        }
    }
`;



const GET_CHAT = gql`
    query getMessages($sender: String, $receiver: String) {
        messages(sender: $sender, receiver: $receiver) {
            sender
            senderFullName
            receiver
            content
            timestamp
        }
    }
`

function ChatBox({admin}) {

    const {admin: sender} = useAdmin()
    const receiver = admin;
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState('')

    const [createMessage] = useMutation(CREATE_MESSAGE, {
        refetchQueries: [
            {
                query: GET_CHAT,
                variables: { sender, receiver },
            },
        ],
        awaitRefetchQueries: true, 
    });

    const { loading, error, data } = useQuery(GET_CHAT, {
        variables: {sender,receiver}
    })
    
    const handleSendMessage = async () => {
        try {
            const { data } = await createMessage({
                variables: {
                    sender: sender,
                    receiver: receiver,
                    content: newMessage,
                    timestamp: new Date().toISOString(),
                },
            });

            console.log("Message created:", data.createMessage);
        } catch (error) {
            console.error("Error creating message:", error);
        }
    };
    
    useEffect(() => {
        if (data && Array.isArray(data.messages)) {
            setMessages(data.messages)
        }
    }, [data])

    if (!receiver) {
        return null; 
    }

    if (loading) return <p className="text-white">Loading...</p>
    if (error) return <p className="text-red-500">Error: {error.message}</p>
    

    return (
        <div className='bg-secondary rounded m-3.5 p-3.5 h-full'>
            <h2 className='text-white mb-2.5 text-2xl'>Chat with: {admin}</h2>
            <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg border border-gray-600 h-80"
            style={{ maxHeight: '400px', overflowY: 'auto' }}>
                <div className="space-y-3">
                    {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`${
                        message.senderFullName === sender ? "text-green-400" : "text-blue-400"
                        }`}
                    >
                        <span className="text-gray-400 text-sm mr-1.5">
                            {new Date(message.timestamp).toLocaleDateString('en-US')} at {new Date(message.timestamp).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                        </span>
                        <span className="font-bold text-gray-100">{message.senderFullName === sender ? 'You': message.senderFullName}: </span>
                        <span>{message.content}</span>
                    </div>
                    ))}
                </div>
            </div>
            <input
                onChange={(e) => setNewMessage(e.target.value)}
                type="text"
                placeholder="Type your message..."
                className="p-2 mt-1.5 mb-1.5 rounded-lg border border-gray-600 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full h-1/5"
            />
            <button
                onClick={handleSendMessage}
                className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
                Send
            </button>
                    
        </div>
    )
}



export default ChatBox;
