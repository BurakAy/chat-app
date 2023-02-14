import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  const handleUserInput = (event) => {
    const name = event.target.name;
    setUser((prevVal) => {
      return {
        ...prevVal,
        [name]: event.target.value,
      };
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const auth = getAuth();
    try {
      signInWithEmailAndPassword(auth, user.email, user.password)
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setLoginError(true);
          console.log(errorCode, errorMessage);
        });
    } catch (error) {
      setLoginError(true);
    }
  };

  return (
    <div className="login--container">
      <div className="login--wrapper">
        <h1>ChatUp</h1>
        <h3>Login</h3>
        <form className="login--login_form" onSubmit={handleLogin}>
          <input
            type="email"
            autoComplete="username"
            value={user.email}
            onChange={handleUserInput}
            name="email"
            placeholder="email"
          ></input>
          <input
            type="password"
            autoComplete="current-password"
            value={user.password}
            onChange={handleUserInput}
            name="password"
            placeholder="password"
          ></input>
          <button type="submit">Sign In</button>
          {loginError && (
            <p className="error-msg">There was an error logging in</p>
          )}
        </form>
        <p className="login--sign_up">
          Don't have an account?&nbsp;
          <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
