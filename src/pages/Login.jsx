import "../styles/Login.css";

const Login = () => {
  return (
    <div className="login--container">
      <div className="login--wrapper">
        <h1>ChatUp</h1>
        <h3>Login</h3>
        <form className="login--login_form">
          <input type="email" name="email" placeholder="email"></input>
          <input type="password" name="password" placeholder="password"></input>
          <button type="submit">Sign In</button>
        </form>
        <p className="login--sign_up">
          Don't have an account?&nbsp;
          <a href="" target="_blank">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
