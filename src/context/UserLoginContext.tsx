"use client";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext("");

export function UserLoginContextProvider({ children }: any) {
  const [loginUser, setLoginUser] = useState("");
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setLoginUser(JSON.parse(user));
    }
  }, []);
  return (
    <UserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </UserContext.Provider>
  );
}
export function useLoginGlobalContext() {
  return useContext(UserContext);
}
