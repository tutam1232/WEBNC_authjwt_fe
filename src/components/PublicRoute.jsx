import { useNavigate } from "react-router-dom";
import RouterUrl from "../const/Router";
import { useEffect } from "react";
import { useAuthStore } from "../hooks/useAuthStore";

const PublicRoute = ({ children }) => {
  const navigate = useNavigate();
  const accessToken = useAuthStore((state) => state.accessToken);

  useEffect(() => {    
    if (accessToken) {
      navigate(RouterUrl.HOME);
    }
  }, [navigate]);

  return children;
};

export default PublicRoute;
