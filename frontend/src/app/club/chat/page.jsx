'use client';
import React, { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';

const Chat = () => {
    const [socket, setSocket] = useState(null);
    const [room, setRoom] = useState('general');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const [typingUser, setTypingUser] = useState('');
    const messageEndRef = useRef(null);
    const typingTimeoutRef = useRef(null);

    // Auto scroll to bottom
    const scrollToBottom = () => {
        messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        const newSocket = io(process.env.NEXT_PUBLIC_API_URL, {
            autoConnect: false,
            reconnection: true,
            reconnectionAttempts: 5
        });
        
        setSocket(newSocket);
        newSocket.connect();

        // Join default room
        newSocket.emit('joinRoom', room);

        // Listen for messages
        newSocket.on('receiveMessage', (data) => {
            setMessages(prev => [...prev, data]);
        });

        // Listen for typing indicators
        newSocket.on('userTyping', (user) => {
            setTypingUser(user);
            setIsTyping(true);
        });

        newSocket.on('userStopTyping', () => {
            setIsTyping(false);
        });

        // Listen for new user notifications
        newSocket.on('userJoined', (message) => {
            setMessages(prev => [...prev, {
                message,
                sender: 'System',
                timestamp: new Date().toISOString()
            }]);
        });

        return () => {
            newSocket.disconnect();
        };
    }, [room]);

    const handleRoomChange = (newRoom) => {
        setRoom(newRoom);
        setMessages([]); // Clear messages when changing rooms
        socket.emit('joinRoom', newRoom);
    };

    const handleTyping = () => {
        if (socket) {
            socket.emit('typing', { room, sender: 'User' });

            // Clear previous timeout
            if (typingTimeoutRef.current) {
                clearTimeout(typingTimeoutRef.current);
            }

            // Set new timeout
            typingTimeoutRef.current = setTimeout(() => {
                socket.emit('stopTyping', { room });
            }, 1000);
        }
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (message.trim() && socket) {
            const messageData = {
                room,
                message: message.trim(),
                sender: 'User' // Replace with actual user name
            };
            
            socket.emit('sendMessage', messageData);
            setMessage('');
            socket.emit('stopTyping', { room });
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
                {/* Room Selection */}
                <div className="p-4 border-b bg-gray-50">
                    <select
                        value={room}
                        onChange={(e) => handleRoomChange(e.target.value)}
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="general">General Chat</option>
                        <option value="tech">Tech Discussion</option>
                        <option value="events">Events</option>
                    </select>
                </div>

                {/* Messages Area */}
                <div className="h-[500px] overflow-y-auto p-4">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`mb-4 ${
                                msg.sender === 'User' ? 'text-right' : 'text-left'
                            }`}
                        >
                            <div
                                className={`inline-block p-3 rounded-lg ${
                                    msg.sender === 'User'
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-gray-200'
                                }`}
                            >
                                <p className="font-semibold text-sm">{msg.sender}</p>
                                <p>{msg.message}</p>
                                <p className="text-xs mt-1 opacity-75">
                                    {new Date(msg.timestamp).toLocaleTimeString()}
                                </p>
                            </div>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="text-gray-500 text-sm">
                            {typingUser} is typing...
                        </div>
                    )}
                    <div ref={messageEndRef} />
                </div>

                {/* Message Input */}
                <form onSubmit={handleSendMessage} className="p-4 border-t">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={handleTyping}
                            placeholder="Type your message..."
                            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Chat;
