import React, { createContext, useContext, useState, useEffect } from "react";

type UserContextType = {
  role: string | null;
  setRole: (role: string | null) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [role, setRoleState] = useState<string | null>(null);

  useEffect(() => {
    const storedRole = sessionStorage.getItem("role");
    if (storedRole) {
      setRoleState(storedRole);
    }
  }, []);

  const setRole = (newRole: string | null) => {
    if (newRole) {
      sessionStorage.setItem("role", newRole);
    } else {
      sessionStorage.removeItem("role");
    }
    setRoleState(newRole);
  };

  return (
    <UserContext.Provider value={{ role, setRole }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};
