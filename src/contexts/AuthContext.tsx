import { PropsWithChildren, createContext, useContext, useState } from "react";

type AuthContextType = {
  user: UserType | null;
  login: (user: UserType) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  login: (user: UserType) => {},
  logout: () => {},
  user: null,
});

interface AuthProviderProps extends PropsWithChildren {}
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<AuthContextType["user"]>(null);

  const login = (user: UserType) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
