import { Link } from "react-router-dom"
import "./TopBar.css"

export const TopBar = () => {
    const user = false;
    return (
        <div class='top'>
            <div className="topLeft">
               <h1 className="topLogo">
                    <Link className="Link" to="/"> <i class="fas fa-newspaper"></i>  Dhaka News</Link> 
                </h1>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="Link" to="/">Home</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="Link" to="/">About</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="Link" to="/">Contact</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="Link" to="/write">Write</Link>
                    </li>
                    <li className="topListItem">
                        {user && "Logout"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {user?(
                    <img className="topImg" src="https://i.ibb.co/02sWdwn/Sajjad-Sadiq.png" alt="img" />
                ) : (
                    <>
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="Link" to="/login">Login</Link>
                        </li>
                        <li className="topListItem">
                            <Link className="Link" to="/register">Register</Link>
                        </li>
                    </ul>
                    </>
                )
            }
                
                <i class="fas fa-search"></i>
            </div>
        </div>
    )
}
