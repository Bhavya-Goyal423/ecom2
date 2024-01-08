import { createContext, useContext, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  function logOutUser() {
    setCurrentUser(null);
  }

  return (
    <UserContext.Provider value={{ currentUser, logOutUser }}>
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const value = useContext(UserContext);
  return value;
}

export { useUser, UserProvider };
