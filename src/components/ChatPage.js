// ChatPage.js
import React from 'react';
import ServerList from './ServerList';
import Chat from './Chat';
import ServerCreation from './ServerCreation';

const ChatPage = ({ selectedServer, servers, onSelectServer, onCreateServer }) => {
  return (
    <div className='chat-page'>
      <div className='server-list'>
        <ServerList servers={servers} onSelectServer={onSelectServer} />
        <ServerCreation onCreateServer={onCreateServer} />
      </div>
      <div className='chat-container'>
        <Chat server={selectedServer} />
      </div>
    </div>
  );
};

export default ChatPage;
