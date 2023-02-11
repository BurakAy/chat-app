import "../styles/SidebarSearchbar.css";
import userImage from "../assets/Burak_Ephesus.jpg";

const SidebarSearchbar = () => {
  return (
    <div className="searchbar--container">
      <div className="searchbar--wrapper">
        <div className="searchbar--form">
          <input
            className="finduser"
            name="finduser"
            type="text"
            placeholder="Find a user"
          />
        </div>
        <div className="searchbar--result">
          <img src={userImage} />
          <p>Burak Aydemir</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarSearchbar;
