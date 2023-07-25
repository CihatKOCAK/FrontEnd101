import "./singlepost.css"

function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://i4.hurimg.com/i/hurriyet/75/1110x740/5b0e5ddabf49c21958da2d8a.jpg"
                    alt=""
                    className="singlePostImg" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet.
                    <div className="singlePostEdit">
                    <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Eren</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam expedita explicabo facilis soluta, autem dolorum facere eveniet, voluptate consectetur quis, inventore ipsum! Quaerat ad accusantium temporibus hic inventore dolorum odio.
                Molestias, eos tempore odio est perspiciatis repellendus! Officiis fuga facere ullam dolores itaque perspiciatis minus nobis dolor tenetur voluptate, eveniet quos beatae eos consectetur incidunt atque ea quae ut debitis!
                Non soluta aperiam nemo quasi rerum iste quas magni, dolor illo vero! Placeat cupiditate harum ut rem! Unde accusantium nihil vero doloribus rem assumenda et deleniti facere? Ad, impedit ipsum.</p>
            </div>
        </div>
    )
}

export default SinglePost