'use client';
import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const Chat = () => {
  const [socket, setSocket] = useState(null);
  const [room, setRoom] = useState('general'); // Default room
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Initialize socket connection
    const newSocket = io(process.env.NEXT_PUBLIC_API_URL, { autoConnect: false });
    setSocket(newSocket);

    // Connect to the socket
    newSocket.connect();

    // Join the default room
    newSocket.emit('joinRoom', room);

    // Listen for incoming messages
    newSocket.on('receiveMessage', (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    // Cleanup on component unmount
    return () => {
      newSocket.disconnect();
    };
  }, [room]);

  const handleSendMessage = () => {
    if (message.trim() && socket) {
      const sender = 'You'; // Replace with actual user info if available
      socket.emit('sendMessage', { room, message, sender });
      setMessages((prevMessages) => [...prevMessages, { message, sender }]);
      setMessage('');
    }
  };

  return (
    <div>
      <div className="flex flex-col h-screen">
        {/* Room Selection */}
        <div className="p-4 border-b">
          <label htmlFor="room" className="mr-2">Select Room:</label>
          <select
            id="room"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="general">General</option>
            <option value="tech">Tech</option>
            <option value="random">Random</option>
          </select>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 overflow-y-auto">
          {messages.map((msg, index) => (
            <div key={index} className={`mb-2 ${msg.sender === 'You' ? 'text-right' : 'text-left'}`}>
              <span className="block font-bold">{msg.sender}</span>
              <span className="block">{msg.message}</span>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 border-t flex items-center">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-2 border rounded mr-2"
          />
          <button
            onClick={handleSendMessage}
            className="p-2 bg-blue-500 text-white rounded"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
