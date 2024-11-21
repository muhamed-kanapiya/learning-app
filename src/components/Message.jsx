import React from 'react';
import { FaRobot, FaUser } from 'react-icons/fa';

function Message({ message }) {
  const isBot = message.sender === 'bot';

  return (
    <div
      className={`flex items-start gap-3 ${
        isBot ? '' : 'flex-row-reverse'
      }`}
    >
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${
          isBot
            ? 'bg-gradient-to-r from-blue-600 to-purple-600'
            : 'bg-gradient-to-r from-emerald-500 to-teal-500'
        }`}
      >
        {isBot ? (
          <FaRobot className="text-lg text-white" />
        ) : (
          <FaUser className="text-lg text-white" />
        )}
      </div>
      <div className={`flex-1 ${isBot ? 'pr-12' : 'pl-12'}`}>
        <div
          className={`rounded-xl p-4 shadow-lg ${
            isBot
              ? 'bg-gray-900/80 border border-gray-800 dark:text-white text-gray-800'
              : 'bg-gradient-to-r from-blue-600/90 to-purple-600/90 text-white'
          }`}
        >
          <p className="whitespace-pre-line">{message.content}</p>
          {message.options && (
            <div className="mt-4 space-y-2">
              {message.options.map((option, index) => (
                <button
                  key={index}
                  className="block w-full text-left px-4 py-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors border border-gray-700 hover:border-gray-600 text-white"
                  onClick={() => option.action()}
                >
                  {option.text}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Message;