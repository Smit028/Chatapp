// ServerList.js

import React, { useEffect, useState } from "react";
import fetchServers from "../components/fetchServers"; // Import the fetchServers function

const ServerList = () => {
  const [servers, setServers] = useState([]);

  useEffect(() => {
    const getServers = async () => {
      const serverList = await fetchServers();
      setServers(serverList);
    };

    getServers();
  }, []);

  return (
    <div>
      <h2>List of Servers</h2>
      <ul>
        {servers.map((server) => (
          <li key={server.id}>{server.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServerList;
