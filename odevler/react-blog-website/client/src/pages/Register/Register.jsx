import { Link } from "react-router-dom";
import "./register.css";
import { useRef, useState } from "react";
import axios from "axios";

function Register() {
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [error,setError] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(false)
    try {
      const res = await axios.post("/auth/register", {
        email: emailRef.current.value,
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      });
      res.data&&window.location.replace("/login")
    } catch (err) {
        setError(true)
      console.log(err);
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleRegister}>
        <label>Email</label>
        <input
          ref={emailRef}
          className="registerInput"
          type="email"
          placeholder="123@example.com"
        />
        <label>Username</label>
        <input
          ref={usernameRef}
          className="registerInput"
          type="text"
          placeholder="erensahin"
        />
        <label>Password</label>
        <input
          ref={passwordRef}
          className="registerInput"
          type="password"
          placeholder="Enter your password."
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      <button className="registerLoginButton">
        <Link to="/login">Login</Link>
      </button>
      {error && <span style={{color:"red",marginTop:"10px"}}>Something went wrong!</span>}
    </div>
  );
}

export default Register;
