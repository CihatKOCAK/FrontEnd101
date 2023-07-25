import { Link } from "react-router-dom"
import "./register.css"

function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>Email</label>
                <input className="registerInput" type="email" placeholder="123@example.com" />
                <label>Username</label>
                <input className="registerInput" type="text" placeholder="erensahin" />
                <label>Password</label>
                <input className="registerInput" type="password" placeholder="Enter your password." />
                <button className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton"><Link to="/login">Login</Link></button>
        </div>
    )
}

export default Register