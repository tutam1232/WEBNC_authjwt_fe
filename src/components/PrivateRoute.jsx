import { Navigate } from "react-router-dom";
import RouterUrl from "../const/Router";
import useFetchProtectedData from "../hooks/useFetchProtectedData";
import Urls from "../const/Url";
import { useAuthStore } from "../hooks/useAuthStore";
const PrivateRoute = ({ children }) => {
  const accessToken = useAuthStore((state) => state.accessToken);
  useFetchProtectedData(Urls.HOME, "get");

  if (!accessToken) {
    return <Navigate to={RouterUrl.LOGIN} />;
  }

  return children;
};

export default PrivateRoute;