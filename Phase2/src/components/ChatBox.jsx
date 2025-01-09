import { useState } from "react";
import PropTypes from "prop-types";

function ChatBox({ admin, messages, onSendMessage }) {
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage("");
    }
  };

  return (
    <div className="bg-secondary p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold text-white mb-4">Chat with: {admin.name}</h2>
      <div className="bg-primary p-4 rounded-lg mb-4 max-h-60 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 ${
              msg.type === "user" ? "text-green-400" : "text-blue-400"
            }`}
          >
            <strong>{msg.sender}: </strong>
            <span>{msg.content}</span>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-grow p-2 rounded-lg bg-primary text-white focus:outline-none"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-lg hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
}


ChatBox.propTypes = {
  admin: PropTypes.shape({
    id: PropTypes.number.isRequired, 
    name: PropTypes.string.isRequired, 
  }).isRequired,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string.isRequired, 
      content: PropTypes.string.isRequired, 
      type: PropTypes.oneOf(["user", "admin"]).isRequired, 
    })
  ).isRequired,
  onSendMessage: PropTypes.func.isRequired, 
};

export default ChatBox;
