import React from 'react';
import Chat from '../components/Chat';
import PathSelector from '../components/PathSelector';
import Achievements from '../components/Achievements';
import { MarketingChatProvider } from '../context/MarketingChatContext';

function Dashboard() {
  return (
    <MarketingChatProvider>
      <div className="container mx-auto p-4 flex gap-6">
        <div className="flex-1">
          <PathSelector />
          <Chat />
        </div>
        <div className="w-80 hidden lg:block">
          <Achievements />
        </div>
      </div>
    </MarketingChatProvider>
  );
}

export default Dashboard;