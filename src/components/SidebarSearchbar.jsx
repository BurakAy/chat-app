import "../styles/SidebarSearchbar.css";

const SidebarSearchbar = () => {
  return (
    <div className="searchbar--container">
      <div className="searchbar--wrapper">
        <form className="searchbar--form">
          <input
            className="finduser"
            name="finduser"
            type="text"
            placeholder="Find a user"
          />
        </form>
      </div>
    </div>
  );
};

export default SidebarSearchbar;
