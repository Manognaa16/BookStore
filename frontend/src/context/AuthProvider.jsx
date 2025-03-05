import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export default function AuthProviderr({ children }) {
  const initialAuthUser = localStorage.getItem("Users");
  const [authUser, setAuthUset] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );
  return (
    <AuthContext.Provider value={[authUser, setAuthUset]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
