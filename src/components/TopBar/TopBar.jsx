import { Link } from "react-router-dom"
import "./TopBar.css"

export const TopBar = () => {
    return (
        <div class='top'>
            <div className="topLeft">
               <h1 className="topLogo">
                    <Link className="TopListLink" to="/"> <i class="fas fa-newspaper"></i>  Dhaka News</Link> 
                </h1>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="TopListLink" to="/home">Home</Link>
                    </li>
                    <li className="topListItem">
                        About
                    </li>
                    <li className="topListItem">
                        Contact
                    </li>
                    <li className="topListItem">
                        <Link className="TopListLink" to="/write">Write</Link>
                    </li>
                    <li className="topListItem">
                        Logout
                    </li>
                </ul>
            </div>
            <div className="topRight">
                <img src="../../img/sajjad.png" alt="img" />
                <i class="fas fa-search"></i>
            </div>
        </div>
    )
}
