import ChatPanelMessage from "./ChatPanelMessage";
import "../styles/ChatPanelChat.css";
import { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { doc, onSnapshot, getFirestore } from "firebase/firestore";

const ChatPanelChat = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);
  const db = getFirestore();

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unsub();
    };
  }, [data.chatId]);

  const chatMessage = messages.map((message) => {
    console.log(message);
    return <ChatPanelMessage message={message} key={message.id} />;
  });

  return <div className="chatpanelchat--container">{chatMessage}</div>;
};

export default ChatPanelChat;
