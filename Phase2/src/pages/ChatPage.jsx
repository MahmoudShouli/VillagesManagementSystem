import Dashboard from "../components/Dashboard";
import Admins from "../components/Admins";
import ChatBox from "../components/ChatBox";
import { useState } from "react";

function ChatPage() {

    const [searchTerm, setSearchTerm] = useState("");

    const [selectedAdmin, setSelectedAdmin] = useState("");

    return (
        <div className="flex bg-primary text-white">
            <Dashboard />
            <div className="flex flex-col w-full ">
                <h1 className="m-3.5 text-2xl font-semibold">Chat with Admins</h1>
                <input
                    type="text"
                    placeholder="Search for an admin..."
                    className="bg-white text-gray-950 rounded p-2.5 m-3.5 max-w-full h-15"
                    onChange = {(e) => setSearchTerm(e.target.value)}
                />
                <Admins onAdminSelect={setSelectedAdmin} searchVal={searchTerm} />
                <ChatBox admin={selectedAdmin} />
            </div>

        </div>
    )
}

export default ChatPage;
