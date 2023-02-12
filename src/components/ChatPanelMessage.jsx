import "../styles/ChatPanelMessage.css";
import userImage from "../assets/Burak_Ephesus.jpg";

const ChatPanelMessage = () => {
  return (
    <div className="chatpanelmessage--container">
      <div className="chatpanelmessage--wrapper">
        <img src={userImage} />
        <p>message</p>
      </div>
    </div>
  );
};

export default ChatPanelMessage;
