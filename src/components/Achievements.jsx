import React from 'react';
import { useMarketingChat } from '../context/MarketingChatContext';
import { motion } from 'framer-motion';

function Achievements() {
  const { currentPath } = useMarketingChat();

  if (!currentPath || !currentPath.achievements) return null;

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-4">🏆 Achievements</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {currentPath.achievements.map((achievement) => (
          <motion.div
            key={achievement.id}
            className={`p-4 rounded-lg border ${
              achievement.unlocked
                ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500'
                : 'bg-gray-900/50 border-gray-800'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-3xl mb-2 block">{achievement.icon}</span>
            <h3 className="font-bold">{achievement.title}</h3>
            <p className="text-sm text-gray-400">{achievement.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;
