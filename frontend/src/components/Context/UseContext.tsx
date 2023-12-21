import React, { createContext, useContext, useEffect, useState } from "react";
import { User, UserContextProps } from "../../models/Interface";

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const useUserContext = (): UserContextProps => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }

  return context;
};

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check for a stored user when the component mounts
    const storedUser = localStorage.getItem("loggedUser");

    if (storedUser) {
      const parsedUser: User = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, []);

  const setLoggedInUser = (loggedUser: any) => {
    localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
    setUser(loggedUser);
  };

  const logoutUser = () => {
    localStorage.removeItem("loggedUser");
    setUser(null);
  };

  const contextValue: UserContextProps = {
    user,
    setLoggedInUser,
    logoutUser,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
