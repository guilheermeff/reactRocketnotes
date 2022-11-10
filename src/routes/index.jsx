import { BrowserRouter as Router } from "react-router-dom";
import { useAuth } from "../hooks/auth.jsx";

import { AuthRoutes } from "./auth.routes.jsx";
import { AppRoutes } from './app.routes.jsx';


export function Routes() {

  const { user } = useAuth();

  return(
    <Router>
      {user ? <AppRoutes /> : <AuthRoutes />}
    </Router>
  )
}