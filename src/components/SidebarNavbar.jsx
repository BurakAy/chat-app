import "../styles/SidebarNavbar.css";
import userImage from "../assets/Burak_Ephesus.jpg";
import { getAuth, signOut } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const SidebarNavbar = () => {
  const currentUser = useContext(AuthContext);

  const handleSignOut = () => {
    const auth = getAuth();
    try {
      signOut(auth);
    } catch (error) {
      console.log(`error signing out: ${error}`);
    }
  };

  return (
    <div className="side-navbar--container">
      <div className="side-navbar--wrapper">
        <p className="side-navbar__appname">ChatUp</p>
        <div className="side-navbar__user">
          <img
            src={currentUser.photoURL}
            className="side-navbar__user-avatar"
          />
          <p>{currentUser.displayName}</p>
        </div>
        <button onClick={handleSignOut} className="side-navbar__logout">
          logout
        </button>
      </div>
    </div>
  );
};

export default SidebarNavbar;
