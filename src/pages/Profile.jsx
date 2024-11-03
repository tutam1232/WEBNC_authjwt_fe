import useFetchProtectedData from "../hooks/useFetchProtectedData";
import Urls from "../const/Url";
import { useAuthStore } from "../hooks/useAuthStore";

function Profile() {
  const profileData = useFetchProtectedData(Urls.PROFILE, "get");
  const email = useAuthStore((state) => state.email);
  return (
    <div
      style={{
        width: "100vw",
        height: "50vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>Profile</h1>
      <p style={{margin: "5px"}}><b>Email:</b> {email}</p>
      <p style={{margin: "5px"}}><b>Name:</b> {profileData?.data?.name}</p>
      <p style={{margin: "5px"}}><b>Hobby:</b> {profileData?.data?.hobby}</p>
    </div>
  );
}

export default Profile;
