import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const UserPage = () => {
  const { setUser } = useAppContext();
  const navigate = useNavigate();

  const handleLogOut = () => {
    setUser({
      email: "",
      displayName: "",
      photoURL: "",
      lastLogin: "",
      status: "inactive",
    });
    navigate("/");
  };
  return (
    <div>
      <div>Profile Page</div>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
};
export default UserPage;
