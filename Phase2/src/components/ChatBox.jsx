/* eslint-disable react/prop-types */


function ChatBox({admin}) {

    const initialMessages = [
        { sender: "Admin1", text: "Hello! How can I assist you today?", type: "admin" },
        { sender: "You", text: "I have a question about my account.", type: "user" },
        { sender: "Admin1", text: "Sure! Please provide your account details.", type: "admin" },
    ];
    
    const messages = initialMessages.map(message =>
        message.sender === "Admin1" ? { ...message, sender: admin } : message
    );

    return (
        <div className='bg-secondary rounded m-3.5 p-3.5 h-full'>
            <h2 className='text-white mb-2.5 text-2xl'>Chat with: {admin}</h2>
            <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg border border-gray-600 h-80">
                <div className="space-y-3">
                    {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`${
                        message.type === "admin" ? "text-blue-400" : "text-green-400"
                        }`}
                    >
                        <span className="font-bold text-gray-400">{message.sender}: </span>
                        <span>{message.text}</span>
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
