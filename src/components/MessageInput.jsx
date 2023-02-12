import "../styles/MessageInput.css";

const MessageInput = () => {
  return (
    <div className="messageinput--container">
      <div className="messageinput--wrapper">
        <input type="text" placeholder="Enter a message..." />
      </div>
    </div>
  );
};

export default MessageInput;
