import "../styles/MessageInput.css";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import PhotoIcon from "@mui/icons-material/Photo";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import {
  arrayUnion,
  doc,
  getFirestore,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { uuidv4 } from "@firebase/util";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const MessageInput = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState();
  const currentUser = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const fileInput = useRef();
  const db = getFirestore();

  const handleTextInput = (event) => {
    setText(event.target.value);
  };

  const handleImgAttach = () => {
    setImg(fileInput.current.files[0]);
  };

  const handleSend = async () => {
    if (img) {
      const storage = getStorage();
      const storageRef = ref(storage, uuidv4());
      await uploadBytes(storageRef, img);
      await getDownloadURL(storageRef).then(async (downloadURL) => {
        updateDoc(doc(db, "chats", data.chatId), {
          messages: arrayUnion({
            id: uuidv4(),
            text,
            senderId: currentUser.uid,
            date: Timestamp.now(),
            img: downloadURL,
          }),
        });
      });
    } else {
      updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuidv4(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }
  };

  return (
    <div className="messageinput--container">
      <div className="messageinput--wrapper">
        <input
          type="text"
          value={text}
          onChange={handleTextInput}
          placeholder="Enter a message..."
        />
        <div className="messageinput--icons">
          <label className="messageinput__file">
            <AttachFileIcon fontSize="medium" />
            <input
              name="attachFile"
              type="file"
              ref={fileInput}
              onChange={handleImgAttach}
            />
          </label>
          <label className="messageinput__img">
            <PhotoIcon fontSize="medium" />
            <input name="attachImg" type="file" />
          </label>
          <button type="submit" onClick={handleSend}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageInput;
