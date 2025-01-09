import { useState } from "react"
import Dashboard from "../components/Dashboard"
import AvailableAdmins from "../components/AvailableAdmins"
import ChatBox from "../components/ChatBox"
import profileImage from '../assets/profile.png'



function ChatPage() {

    const [admins] = useState([
        { id: 1, name: "Admin1", profilePic: profileImage },
        { id: 2, name: "Admin2", profilePic: profileImage },
        { id: 3, name: "Admin3", profilePic: profileImage }
    ])

    const [selectedAdmin, setSelectedAdmin] = useState(null);
    const [messages, setMessages] = useState([]);


    const handleAdminSelect = (admin) => {
        setSelectedAdmin(admin);
        setMessages([
            { sender: admin.name, content: "Hello! How can I assist you today?", type: "admin" },
        ]); // Initialize chat messages for the admin.
    };


    const handleSendMessage = (message) => {
        setMessages((prevMessages) => [
            ...prevMessages,
            { sender: "You", content: message, type: "user" },
        ]);
    };


    return(
        <div className="flex min-h-screen bg-primary text-white">
            <Dashboard />
            <div className="p-6 bg-primary min-h-screen">
                <h1 className="text-2xl font-bold text-white mb-6">Chat with Admins</h1>
                <AvailableAdmins admins={admins} onAdminSelect={handleAdminSelect} />
                {selectedAdmin && (
                    <ChatBox
                        admin={selectedAdmin}
                        messages={messages}
                        onSendMessage={handleSendMessage}
                    />
                )}
            </div>
        </div>
        )
}

export default ChatPage