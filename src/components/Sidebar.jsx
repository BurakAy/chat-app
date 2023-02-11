import "../styles/Sidebar.css";
import SidebarNavbar from "./SidebarNavbar";
import SidebarSearchbar from "./SidebarSearchbar";
import SidebarChats from "./SidebarChats";

const Sidebar = () => {
  return (
    <div className="sidebar--container">
      <SidebarNavbar />
      <SidebarSearchbar />
      <SidebarChats />
    </div>
  );
};

export default Sidebar;
