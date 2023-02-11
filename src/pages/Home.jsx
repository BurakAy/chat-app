import ChatPanel from "../components/ChatPanel";
import Sidebar from "../components/Sidebar";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home--container">
      <div className="home--wrapper">
        <Sidebar />
        <ChatPanel />
      </div>
    </div>
  );
};

export default Home;
