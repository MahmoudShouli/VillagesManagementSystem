/* eslint-disable react/prop-types */
import { useAdmin } from '../AdminContext'
import { useState, useEffect } from 'react'
import { useQuery, gql } from '@apollo/client'

function ChatBox({admin}) {

    const {admin: sender} = useAdmin()
    const receiver = admin;
    const [messages, setMessages] = useState([])

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

    const { loading, error, data } = useQuery(GET_CHAT, {
        variables: {sender,receiver}
    })
    
    console.log(data)
    
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
            <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg border border-gray-600 h-80">
                <div className="space-y-3">
                    {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`${
                        message.senderFullName === sender ? "text-green-400" : "text-blue-400"
                        }`}
                    >
                        <span className="font-bold text-gray-400">{message.senderFullName === sender ? 'You': message.senderFullName}: </span>
                        <span>{message.content}</span>
                    </div>
                    ))}
                </div>
            </div>
            <input
                type="text"
                placeholder="Type your message..."
                className="p-2 mt-1.5 mb-1.5 rounded-lg border border-gray-600 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full h-1/5"
            />
            <button
                className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
                Send
            </button>
                    
        </div>
    )
}



export default ChatBox;
