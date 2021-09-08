import "./SideBar.css"

export const SideBar = () => {
    return (
        <div className="sideBar">
            <div className="sideBarItem">
                <span className="sideBarTitle">About Me</span>
                <img src="" alt="" />
                <p className="SideBarTitileSm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam autem nemo consequatur aperiam quaerat id quas libero provident alias. Quos maxime cupiditate. </p>
            </div>
            <div className="sideBarItem">
                <span className="sideBarTitle">Cetegories</span>
                <ul className="sideBarList">
                    <li className="sideBarListItem">Sport</li>
                    <li className="sideBarListItem">Music</li>
                    <li className="sideBarListItem">Fun</li>
                    <li className="sideBarListItem">Love</li>
                    <li className="sideBarListItem">Tech</li>
                    <li className="sideBarListItem">moveis</li>
                </ul>
            </div>
            <div className="sideBarItem">
                <span className="sideBarTitle">Follow Us</span>
                <div className="sideBarSocial">
                    <i className="sideBarSocialIcon fab fa-facebook-square" ></i>
                    <i className="sideBarSocialIcon fab fa-twitter-square" ></i>
                    <i className="sideBarSocialIcon fab fa-pinterest-square" ></i>
                    <i className="sideBarSocialIcon fab fa-instagram-square" ></i>
                </div>
            </div>
        </div>
    )
}
