import "./post.css"

function Post() {
    return (
        <div className="post">
            <img className="postImg"
                src="https://i4.hurimg.com/i/hurriyet/75/1110x740/5b0e5ddabf49c21958da2d8a.jpg" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati mollitia itaque esse nulla ratione quis enim deserunt, voluptatibus animi recusandae molestias tenetur iusto, nam cupiditate laboriosam veritatis magni in facilis.
            Veritatis saepe neque quisquam odio! Rem quibusdam laborum voluptatum officiis sit non repellendus itaque delectus vero atque, vel cum officia culpa quam illo harum aspernatur. Vero quis voluptas ut fugiat!
            Iste, totam! Labore harum esse assumenda culpa ipsum quo animi, repudiandae qui. Odit, amet id recusandae accusantium enim veniam eligendi? Labore error doloribus, perspiciatis totam asperiores quibusdam deserunt obcaecati quasi.</p>
        </div>
    )
}

export default Post