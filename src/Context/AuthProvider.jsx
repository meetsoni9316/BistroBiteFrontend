// import React, { createContext, useContext, useState } from "react";

// export const AuthContext = createContext();
// export default function AuthProvider({ children }) {
//   const initialAuthUser = localStorage.getItem("Users");
//   const [authUser, setAuthUser] = useState(
//     initialAuthUser ? JSON.parse(initialAuthUser) : undefined
//   );

//   return (
//     <AuthContext.Provider value={[authUser, setAuthUser]}>
//       {children}
//     </AuthContext.Provider>
//   );
// }
// export const useAuth = () => useContext(AuthContext);
import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  // Get the initial auth user from localStorage
  const initialAuthUser = localStorage.getItem("Users");
  let parsedAuthUser = undefined;

  // Safely parse the initialAuthUser if it's not null or undefined
  if (initialAuthUser) {
    try {
      parsedAuthUser = JSON.parse(initialAuthUser);
    } catch (error) {
      console.error("Failed to parse auth user JSON:", error);
    }
  }

  // Initialize the state with the parsed auth user
  const [authUser, setAuthUser] = useState(parsedAuthUser);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
