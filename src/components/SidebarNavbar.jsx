import "../styles/SidebarNavbar.css";

const SidebarNavbar = () => {
  return (
    <div className="side-navbar--container">
      <div className="side-navbar--wrapper">
        <p className="side-navbar__appname">ChatUp</p>
        <div className="side-navbar__user">
          <img src="" className="side-navbar__user-avatar" />
          <p>Burak Aydemir</p>
        </div>
        <button className="side-navbar__logout">logout</button>
      </div>
    </div>
  );
};

export default SidebarNavbar;
