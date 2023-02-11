import "../styles/SidebarChats.css";
import userImage from "../assets/Burak_Ephesus.jpg";

const SidebarChats = () => {
  return (
    <div className="sidebarchats--container">
      <div className="sidebarchats">
        <img src={userImage} />
        <p>Burak Aydemir</p>
      </div>
    </div>
  );
};

export default SidebarChats;
