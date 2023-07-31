import { Link } from "react-router-dom";
import "./login.css";
import axios from "axios";
import { useContext, useRef } from "react";
import { Context } from "../../context/Context";

function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      window.location.replace("/");
      // res.data && window.location.replace("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      console.log(err);
    }
  };
  
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleLogin}>
        <label>Username</label>
        <input
          ref={usernameRef}
          className="loginInput"
          type="text"
          placeholder="Enter your username..."
        />
        <label>Password</label>
        <input
          ref={passwordRef}
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
        />
        <button className="loginButton" disabled={isFetching}>Login</button>
      </form>
      <button className="loginRegisterButton" type="submit">
        <Link to="/register">Register</Link>
      </button>
    </div>
  );
}

export default Login;
