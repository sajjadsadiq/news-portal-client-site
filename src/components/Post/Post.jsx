import "./Post.css"

export const Post = () => {
    return (
        <div className="post">
            <div className="postImgWrap">
                <img className="postImg" src="https://rogermontgomery.com/wp-content/uploads/2020/09/07092020_CTD.jpg" alt="" />
            </div>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Musin</span>
                    <span className="postCat">Love</span>
                </div>
                <div className="postTitleWrap">
                    <span  className="postTitle">Lorem ipsum dolor sit amet consectetur sunt.</span>
                </div>
                <span className="postDate">
                    1 Hour ago
                </span>
                <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quisquam pariatur commodi rerum deserunt aliquid odio amet natus, incidunt provident. Vel recusandae fugit doloribus dignissimos, saepe sint deleniti temporibus inventore molestias at non ipsam, et quod tenetur nostrum unde tempora illo sapiente quasi fugiat minus praesentium! Eum doloribus eveniet temporibus reprehenderit perspiciatis culpa, numquam natus nam amet doloremque dignissimos explicabo esse facere nostrum, quos voluptas harum quidem minus provident. Quibusdam officia laudantium, dicta eum odit labore possimus aliquid! Illo, eum iusto ullam numquam reiciendis saepe repellat fuga, debitis similique et ipsa accusantium sit quidem quis beatae, tempore mollitia tempora? Sequi.</p>
            </div>
        </div>
    )
}
