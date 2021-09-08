import "./Header.css"

export const Header = () => {
    return (
        <div className="header">
            <div className="headerTitle">
                <h2 className="headerTitleContentLr">Enjoy</h2>
                <h5 className="headerTitleContentSm">Taza News Dhaka City.</h5>
            </div>
            <div className="headerImg">
                <img className="HeaderImgContent" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo5U6_npdLWZ6NsYIGHl7UDfM7Ixn4N2Wt3g&usqp=CAU" alt="" />
            </div>
        </div>
    )
}
