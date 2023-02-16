import "../styles/ChatPanelNavbar.css";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

const ChatPanelNavbar = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="chatpanelnavbar--container">
      <div className="chatpanelnavbar--wrapper">
        <p className="chatpanelnavbar--user">{data.user?.displayName}</p>
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
