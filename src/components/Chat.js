// 123

import "../App.css"
import React, { useEffect, useState, useRef } from "react";
import { authUser, db } from "../firebase_config";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
const Chat = (props) => {
  const { server } = props;
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const messageRef = collection(db, "chatSection");
  const chatContainerRef = useRef(null);

  useEffect(() => {
    const queryMessages = query(
      messageRef,
      where("server", "==", server),
      orderBy("time")
    );
    const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
      // Scroll to the bottom when new messages arrive.
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }
    });
    return () => unsubscribe();
  }, [server]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMessage === "") return;
    await addDoc(messageRef, {
      text: newMessage,
      time: serverTimestamp(),
      user: authUser.currentUser.displayName,
      server: server,
      userProfilePhotoURL: authUser.currentUser.photoURL,
    });

    setNewMessage("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <div className="Chat-App">
      <div className="border-b border-gray-600 flex px-12 py-2 items-center flex-none shadow-xl">
        <div className="flex flex-col">
          <h3 className="text-white mb-1 font-bold text-xl text-gray-100">
            <span className="text-gray-400">#</span>
            {server}
          </h3>
        </div>
      </div>
      <div className="msgs" ref={chatContainerRef}>
        {messages.map((message) => (
          <div
            className={`msg-txt ${
              message.user === authUser.currentUser.displayName
                ? "sent-message"
                : "received-messag1"
            }`}
            key={message.id}
          >
            
            <div className="border-b border-gray-600 py-1 pb-2 flex items-start text-sm">
              {message.user !== authUser.currentUser.displayName && (
                <img
                  src={message.userProfilePhotoURL} 
                  alt="User"
                  className="cursor-pointer w-10 h-10 rounded-3xl mr-3"
                />
              )}
              <div className="flex-1 overflow-hidden">
                <div>
                  <span className="font-bold text-red-300 cursor-pointer hover:underline">
                    {message.user}
                  </span>
                </div>
                <p className="text-white leading-normal">{message.text}
                  
                </p>
              </div>
              {message.user === authUser.currentUser.displayName && (
                <img
                  src={message.userProfilePhotoURL} 
                  alt="User"
                  className="cursor-pointer w-10 h-10 rounded-3xl mr-3"
                />
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="px-4 flex-none">
        <div className="flex rounded-lg overflow-hidden">
          <span className="text-3xl text-grey border-r-4 border-gray-600 bg-gray-600 p-2">
            <svg
              className="h-6 w-6 block bg-gray-500 hover:bg-gray-400 cursor-pointer rounded-xl"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"
                fill="#FFFFFF"
              />
            </svg>
          </span>
          <input
            type="text"
            onChange={(e) => setNewMessage(e.target.value)}
            value={newMessage}
            onKeyPress={handleKeyPress}
            className="w-full px-4 bg-gray-600 text-white"
            placeholder="Message #general"
          />
        </div>
        {/* Removed an empty <div> here */}
      </div>
    </div>
  );
};

export default Chat;
