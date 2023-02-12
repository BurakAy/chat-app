import "../styles/Register.css";
import imgIcon from "../assets/avatar_icon.svg";
import PhotoIcon from "@mui/icons-material/Photo";

const Register = () => {
  return (
    <div className="register--container">
      <div className="register--wrapper">
        <h1>ChatUp</h1>
        <h3>Register</h3>
        <form className="register--form">
          <input type="text" name="name" placeholder="username"></input>
          <input type="email" name="email" placeholder="email"></input>
          <input type="password" name="password" placeholder="password"></input>
          <label id="avatar-picker">
            <PhotoIcon fontSize="large" /> Add an avatar
            <input type="file" name="avatar" accept=".png, .jpg, .jpeg"></input>
          </label>
          <button type="submit">Sign Up</button>
        </form>
        <p className="register--sign_up">
          Already have an account?&nbsp;
          <a href="" target="_blank">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
