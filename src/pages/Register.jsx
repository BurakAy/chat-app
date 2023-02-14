import "../styles/Register.css";
import PhotoIcon from "@mui/icons-material/Photo";
import { useRef, useState } from "react";
import {
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [registerError, setRegisterError] = useState(false);
  const navigate = useNavigate();
  const fileInput = useRef();

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
    const auth = getAuth();
    try {
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
      })
        .then(() => {
          userImg(user);
        })
        .catch((error) => {
          setRegisterError(true);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const userImg = async (user) => {
    const storage = getStorage();
    try {
      const storageRef = ref(storage, userInfo.name);
      const metadata = {
        contentType: "image/jpeg",
      };
      await uploadBytes(storageRef, fileInput.current.files[0], metadata);
      await getDownloadURL(storageRef).then(async (downloadURL) => {
        await updateProfile(user, {
          displayName: userInfo.name,
          photoURL: downloadURL,
        });
        await userDB(user, downloadURL);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const userDB = async (user, photoURL) => {
    const db = getFirestore();
    try {
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: photoURL,
      });
      await setDoc(doc(db, "userChats", user.uid), {});
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
            autoComplete="username"
            placeholder="email"
            value={userInfo.email}
            onChange={handleUserInfoChange}
          ></input>
          <input
            autoComplete="new-password"
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
              accept=".png, .jpg, .jpeg"
              ref={fileInput}
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
