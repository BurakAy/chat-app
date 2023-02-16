import "../styles/ChatPanelMessage.css";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const ChatPanelMessage = (props) => {
  const currentUser = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const [owner, setOwner] = useState(false);
  const ref = useRef();

  useEffect(() => {
    props.message.senderId === currentUser.uid
      ? setOwner(true)
      : setOwner(false);
  }, [owner]);

  useEffect(() => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }, [props.message]);

  return (
    <div ref={ref} className="chatpanelmessage--container">
      <div className={`chatpanelmessage--wrapper ${owner ? "owner" : ""}`}>
        <div className="chatpanelmessage--msg_info">
          <img src={owner ? currentUser.photoURL : data.user.photoURL} />
          <span>time</span>
        </div>
        <div className="chatpanelmessage--content">
          <p className="chatpanelmessage--sent_msg">{props.message.text}</p>
          {props.message.img && (
            <img
              className="chatpanelmessage--sent_img"
              src={props.message.img}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatPanelMessage;
