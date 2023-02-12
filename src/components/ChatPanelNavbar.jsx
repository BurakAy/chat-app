import "../styles/ChatPanelNavbar.css";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const ChatPanelNavbar = () => {
  return (
    <div className="chatpanelnavbar--container">
      <div className="chatpanelnavbar--wrapper">
        <p className="chatpanelnavbar--user">Burak</p>
        <div className="chatpanelnavbar--icons">
          <VideoCallIcon fontSize="medium" />
          <PersonAddIcon fontSize="medium" />
          <MoreHorizIcon fontSize="medium" />
        </div>
      </div>
    </div>
  );
};

export default ChatPanelNavbar;
