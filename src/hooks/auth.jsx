import { createContext, useContext } from "react";

export const Authcontext = createContext({});

function AuthProvider({ children }) {
  return(
    <Authcontext.Provider value={{ name: "name", email: "guilherme@example.com" }}>
      {children}
    </Authcontext.Provider>
  )
}

function useAuth() {
  const context = useContext(Authcontext);

  return context;
}

export { AuthProvider, useAuth }