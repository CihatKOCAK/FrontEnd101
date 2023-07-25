import "./write.css"

function Write() {
    return (
        <div className="write">
            <img
                className="writeImg"
                src="https://i4.hurimg.com/i/hurriyet/75/1110x740/5b0e5ddabf49c21958da2d8a.jpg" alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{ display: "none" }} />
                    <input className="writeInput" autoFocus={true} type="text" placeholder="Title" />
                </div>
                <div className="writeFormGroup">
                    <textarea className="writeInput writeText" placeholder="Tell your story..." type="text"></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}

export default Write