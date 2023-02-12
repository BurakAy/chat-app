import "../styles/ChatPanelNavbar.css";
import VideoCallIcon from "@mui/icons-material/VideoCall";

const ChatPanelNavbar = () => {
  return (
    <div className="chatpanelnavbar--container">
      <div className="chatpanelnavbar--wrapper">
        <div className="chatpanelnavbar--icons">
          <VideoCallIcon />
        </div>
      </div>
    </div>
  );
};

export default ChatPanelNavbar;
