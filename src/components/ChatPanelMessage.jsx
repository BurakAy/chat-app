import "../styles/ChatPanelMessage.css";
import userImage from "../assets/Burak_Ephesus.jpg";

const ChatPanelMessage = () => {
  return (
    <div className="chatpanelmessage--container">
      <div className="chatpanelmessage--wrapper owner">
        <div className="chatpanelmessage--msg_info">
          <img src={userImage} />
          <span>time</span>
        </div>
        <p className="chatpanelmessage--sent_msg">message</p>
      </div>
      <div className="chatpanelmessage--wrapper">
        <div className="chatpanelmessage--msg_info">
          <img src={userImage} />
          <span>time</span>
        </div>
        <p className="chatpanelmessage--sent_msg">message</p>
      </div>
    </div>
  );
};

export default ChatPanelMessage;
