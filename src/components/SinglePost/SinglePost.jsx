import "./SinglePost.css"

export const SinglePost = () => {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://g.foolcdn.com/editorial/images/582769/travel-airport-scene.jpg" alt="" className="singlePageImg" />
                <h1 className="singPostTitle">Travel Bangladesh is beutiful place!
                <div className="singlePostEdit">
                    <i class="singlePostIcon far fa-edit"></i> 
                    <i class="singlePostIcon far fa-trash-alt"></i>
                </div>
                </h1>
                <div className="singlePageInfo">
                    <span className="SinglePostAuthon">Author: <b>Sajjad</b></span>
                    <span className="SinglePostDate"> 1 Hour Ago</span>
                </div>
                <p className="singlePostDecs">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat voluptatum esse quibusdam illo amet aut accusamus, corporis unde sapiente ea vitae ducimus facilis eius voluptas. Repudiandae, inventore culpa, totam incidunt, nostrum eius nobis magnam tempora sunt impedit nam dolorem error aperiam quis! Eaque, sed? Eveniet deleniti maxime quae asperiores optio ipsa repudiandae quas sit dignissimos tenetur quaerat alias illo, natus ea possimus voluptatum officia et facere praesentium molestiae vitae animi enim non! Molestiae molestias dicta culpa illo similique dolorum est eos cumque voluptatem cupiditate veniam, debitis sed earum libero minima quod recusandae repudiandae neque iste odio id rerum nulla asperiores!
                </p>
            </div>
        </div>
    )
}
