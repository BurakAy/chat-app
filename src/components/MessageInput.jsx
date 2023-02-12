import "../styles/MessageInput.css";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import PhotoIcon from "@mui/icons-material/Photo";

const MessageInput = () => {
  return (
    <div className="messageinput--container">
      <div className="messageinput--wrapper">
        <input type="text" placeholder="Enter a message..." />
        <div className="messageinput--icons">
          <label className="messageinput__file">
            <AttachFileIcon fontSize="medium" />
            <input name="file" type="file" />
          </label>
          <label className="messageinput__img">
            <PhotoIcon fontSize="medium" />
            <input name="img" type="file" />
          </label>
          <button type="submit">Send</button>
        </div>
      </div>
    </div>
  );
};

export default MessageInput;
