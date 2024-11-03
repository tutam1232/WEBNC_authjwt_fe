
import RouterUrl from "../const/Router";
import { Link } from "react-router-dom";
import { useAuthStore } from "../hooks/useAuthStore";
const PrivateHeader = ({ children }) => {
  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  const setEmail = useAuthStore((state) => state.setEmail);

  return (
    <>
      <div
        style={{
          width: "20%",
          height: "10vh",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link to={RouterUrl.HOME}>Home</Link>
        <Link to={RouterUrl.PROFILE}>Profile</Link>
        <button
          onClick={() => {
            setAccessToken(null);
            setEmail(null);
            window.location.reload();
          }}
        >
          Logout
        </button>
      
      </div>
      {children}
    </>
  );
};

export default PrivateHeader;
