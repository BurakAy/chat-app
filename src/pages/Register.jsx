import "../styles/Register.css";
import PhotoIcon from "@mui/icons-material/Photo";
import { useState } from "react";
import {
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import { app } from "../firebase";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });
  const [registerError, setRegisterError] = useState(false);
  const navigate = useNavigate();

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
    createUser();
  };

  const createUser = () => {
    try {
      const auth = getAuth(app);
      createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
        .then((userCredential) => {
          const user = userCredential.user;
          createProfile(user);
        })
        .catch((error) => {
          setRegisterError(true);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const createProfile = (user) => {
    try {
      updateProfile(user, {
        displayName: userInfo.name,
        photoURL: userInfo.avatar,
      })
        .then(() => {
          userDB(user);
        })
        .catch((error) => {
          setRegisterError(true);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const userDB = (user) => {
    try {
      const db = getFirestore(app);
      setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      });
      setDoc(doc(db, "userChats", user.uid), {});
      navigate("/");
    } catch (error) {
      console.log(error);
    }
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
          <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
