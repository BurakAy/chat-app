import "../styles/Register.css";
import PhotoIcon from "@mui/icons-material/Photo";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });
  const [registerError, setRegisterError] = useState(false);

  const handleUserInfoChange = (event) => {
    const name = event.target.name;
    setUserInfo((prevVal) => {
      return {
        ...prevVal,
        [name]: event.target.value,
      };
    });
  };

  const handleRegistration = (event) => {
    event.preventDefault();

    // Initialize Firebase Authentication and get a reference to the service
    const auth = getAuth(app);

    createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        setRegisterError(true);
      });
  };

  return (
    <div className="register--container">
      <div className="register--wrapper">
        <h1>ChatUp</h1>
        <h3>Create Account</h3>
        <form className="register--form" onSubmit={handleRegistration}>
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
          {registerError && (
            <p className="error-msg">There was an error signing up</p>
          )}
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
