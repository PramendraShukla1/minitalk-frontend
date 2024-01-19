import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false)
  useEffect(()=>{
    const fetchUserProfile = async()=>{
      try {
        const response = await axios.get('/profile');
        setUser(response.data)
        setReady(true)
      } catch (error) {
        setUser(null)
        console.error("Error fetching user profile:", error);
      }
    }
if(!user){
   fetchUserProfile()
}
  },[user])
  return (
    <UserContext.Provider value={{ user, setUser,ready}}>
      {children}
    </UserContext.Provider>
  );
}
