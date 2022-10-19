import { createContext, useContext } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {

  async function signIn({ email, password }) {

    try {
      const response = await api.post("/", { email, password });

      console.log(response);

    } catch(error) {
      if(response.error) {
        alert(error.response.message.data);
      } else {
        alert("Não foi possível conectar!")
      }
    }
  }

  return(
    <AuthContext.Provider value={ signIn } >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };