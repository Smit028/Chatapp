// import logo from './logo.svg';
import './App.css';
import React, { useState, useRef } from 'react';
import Auth from './components/Auth';
import Cookies from 'universal-cookie';
import Chat from './components/Chat';
import { signOut } from 'firebase/auth';
import { authUser } from './firebase_config';
const cookie = new Cookies();

function Msg() {
  const [auth, setAuth] = useState(cookie.get("auth-token"));
  const [server, setServer] = useState(null);
  
  const serverInputRef = useRef(null);

  const signUserOut = async () =>{
    signOut(authUser)
    cookie.remove("auth-token")
    setServer(null)
  }
  // Checks if user is signed in or not
  // If not signed in then it will load signin page
  if (!auth) {
    return (
      <div>
        <Auth setAuth={setAuth} />
      </div>
    );
  }
  // else it will return chatroom of signedin user
  return (
    <div>
      {server ? 
      <div> <Chat server={server}/> </div>
       : <div>
        <label>
          Enter Invite Code:</label>
        <input type='text' ref={serverInputRef}></input>
        <button onClick={() => setServer(serverInputRef.current.value)}>Enter Server</button>
      </div>}
      <div className='sign-out'>
        <button onClick={signUserOut}>Log Out</button>
      </div>
    </div>
  )
}

export default Msg;