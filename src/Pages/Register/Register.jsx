import { Link } from "react-router-dom"
import "./Register.css"

export const Register = () => {
    return (
        <div className="register">
            <div className="registerWrapper">
                <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label htmlFor="">Username</label>
                <input type="text" placeholder="Enter Your Username....."/>
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Enter Your Email....."/>
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Enter Your Password....."/>
                <button className="registerButton">register</button>    
            </form>
            <button className="loginButton">
                <Link className="Link" to="/login">Login</Link>
            </button>
        </div>
        </div>
    )
}
