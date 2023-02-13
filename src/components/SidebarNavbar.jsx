import "../styles/SidebarNavbar.css";
import userImage from "../assets/Burak_Ephesus.jpg";
import { getAuth, signOut } from "firebase/auth";

const SidebarNavbar = () => {
  const handleSignOut = () => {
    try {
      const auth = getAuth();
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
          <img src={userImage} className="side-navbar__user-avatar" />
          <p>Burak</p>
        </div>
        <button onClick={handleSignOut} className="side-navbar__logout">
          logout
        </button>
      </div>
    </div>
  );
};

export default SidebarNavbar;
