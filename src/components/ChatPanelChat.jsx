import ChatPanelMessage from "./ChatPanelMessage";
import "../styles/ChatPanelChat.css";

const ChatPanelChat = () => {
  return (
    <div className="chatpanelchat--container">
      <ChatPanelMessage />
      <ChatPanelMessage />
    </div>
  );
};

export default ChatPanelChat;
