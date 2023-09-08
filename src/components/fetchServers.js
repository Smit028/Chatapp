// fetchServers.js

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase_config"; // Import your Firebase Firestore configuration

const fetchServers = async () => {
  try {
    const serverCollection = collection(db, "chatSection"); // Replace with the actual name of your server collection
    const serverSnapshot = await getDocs(serverCollection);

    const servers = serverSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return servers;
  } catch (error) {
    console.error("Error fetching servers:", error);
    return [];
  }
};

export default fetchServers;
