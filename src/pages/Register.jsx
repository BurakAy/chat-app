import "../styles/Register.css";
import imgIcon from "../assets/avatar_icon.svg";
import PhotoIcon from "@mui/icons-material/Photo";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  const handleUserInfoChange = (event) => {
    const name = event.target.name;
    setUserInfo((prevVal) => {
      return {
        ...prevVal,
        [name]: event.target.value,
      };
    });
  };

  return (
    <div className="register--container">
      <div className="register--wrapper">
        <h1>ChatUp</h1>
        <h3>Register</h3>
        <form className="register--form">
          <input
            type="text"
            name="name"
            placeholder="username"
            value={userInfo.name}
            onChange={handleUserInfoChange}
          ></input>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={userInfo.email}
            onChange={handleUserInfoChange}
          ></input>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={userInfo.password}
            onChange={handleUserInfoChange}
          ></input>
          <label id="avatar-picker">
            <PhotoIcon fontSize="large" /> Add an avatar
            <input
              type="file"
              name="avatar"
              accept=".png, .jpg, .jpeg"
              value={userInfo.avatar}
              onChange={handleUserInfoChange}
            ></input>
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
