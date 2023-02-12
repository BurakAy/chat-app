import "../styles/ChatPanel.css";
import ChatPanelNavbar from "./ChatPanelNavbar";
import ChatPanelChat from "./ChatPanelChat";
import MessageInput from "./MessageInput";

const ChatPanel = () => {
  return (
    <div className="chatpanel--container">
      <ChatPanelNavbar />
      <ChatPanelChat />
      <MessageInput />
    </div>
  );
};

export default ChatPanel;
