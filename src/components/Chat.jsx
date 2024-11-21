import React, { useState, useEffect, useRef } from 'react';
import { useMarketingChat } from '../context/MarketingChatContext';
import Message from './Message';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

function Chat() {
  const { messages, sendMessage } = useMarketingChat();
  const [userInput, setUserInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;
    sendMessage(userInput);
    setUserInput('');
  };

  return (
    <div className="max-w-3xl mx-auto mt-6">
      <div className="bg-black/40 backdrop-blur-sm rounded-xl shadow-2xl p-4 h-[600px] flex flex-col border border-gray-800">
        <div className="flex-1 overflow-y-auto mb-4 space-y-4">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Message message={message} />
            </motion.div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex gap-2 p-2 bg-gray-900/50 rounded-lg border border-gray-800"
        >
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="flex-1 bg-transparent dark:text-white text-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            placeholder="Type your answer..."
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 font-medium"
          >
            <span>Send</span>
            <FaPaperPlane className="text-sm" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;