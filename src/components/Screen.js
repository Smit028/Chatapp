// Home.js
import React from 'react';
import ServerList from './ServerList';
import Home from './Home';

const Screen = () => {
  return (
    <div className='scroll'>
      <div className="float-container">
        <div className="float-child1">
          <ServerList />
        </div>
        <div className="float-child2">
            <Home/>
        </div>
      </div>
        </div>
  );
};

export default Screen;
