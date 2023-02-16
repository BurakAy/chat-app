import "../styles/SidebarChats.css";
import { useContext, useEffect, useState } from "react";
import { doc, getFirestore, onSnapshot } from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const SidebarChats = () => {
  const [chats, setChats] = useState([]);
  const db = getFirestore();
  const currentUser = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (userInfo) => {
    dispatch({ type: "CHANGE_USER", payload: userInfo });
  };

  const Chat = () => {
    const userChats = Object.entries(chats)?.map((chat) => {
      return (
        <div
          className="sidebarchat"
          key={`${chat[0]}`}
          onClick={() => handleSelect(chat[1].userInfo)}
        >
          <img src={`${chat[1].userInfo.photoURL}`} />
          <div className="sidebarchat--chat_info">
            <p className="sidebarchat--user">{`${chat[1].userInfo.displayName}`}</p>
            <p className="sidebarchat--user_msg">
              {`${chat[1].lastMessage?.text}`}
            </p>
          </div>
        </div>
      );
    });
    return userChats;
  };

  return (
    <div className="sidebarchats--container">
      <Chat />
    </div>
  );
};

export default SidebarChats;
