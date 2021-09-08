import "./TopBar.css"

export const TopBar = () => {
    return (
        <div class='top'>
            <div className="topLeft">
               <h1 className="topLogo"><i class="fas fa-newspaper"></i> Dhaka News</h1>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        Home
                    </li>
                    <li className="topListItem">
                        About
                    </li>
                    <li className="topListItem">
                        Contact
                    </li>
                    <li className="topListItem">
                        Write
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
