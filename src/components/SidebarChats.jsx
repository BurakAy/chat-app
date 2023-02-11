import "../styles/SidebarChats.css";
import userImage from "../assets/Burak_Ephesus.jpg";

const SidebarChats = () => {
  return (
    <div className="sidebarchats--container">
      <div className="sidebarchat">
        <img src={userImage} />
        <div className="sidebarchat--chat_info">
          <p className="sidebarchat--user">Burak Aydemir</p>
          <p className="sidebarchat--user_msg">Hey, what are you up to?</p>
        </div>
      </div>
      <div className="sidebarchat">
        <img src={userImage} />
        <div className="sidebarchat--chat_info">
          <p className="sidebarchat--user">Burak Aydemir</p>
          <p className="sidebarchat--user_msg">Hey, what are you up to?</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarChats;
