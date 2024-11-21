import React from 'react';
import { useMarketingChat } from '../context/MarketingChatContext';
import { motion } from 'framer-motion';

function PathSelector() {
  const { paths, selectPath, currentPath } = useMarketingChat();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      {Object.values(paths).map((path) => (
        <motion.button
          key={path.id}
          onClick={() => selectPath(path.id)}
          className={`p-6 rounded-xl border transition-all duration-200 ${
            currentPath?.id === path.id
              ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500'
              : 'bg-black/40 border-gray-800 hover:border-gray-700'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center gap-4">
            <span className="text-4xl">{path.icon}</span>
            <div className="text-left">
              <h3 className="text-xl font-bold">{path.title}</h3>
              <p className="text-gray-400">{path.description}</p>
              <div className="mt-2">
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
                    style={{ width: `${path.progress}%` }}
                  />
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  {path.progress}% complete
                </p>
              </div>
            </div>
          </div>
        </motion.button>
      ))}
    </div>
  );
}

export default PathSelector;
