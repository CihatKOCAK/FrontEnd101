import { useContext, useRef, useState } from "react";
import "./write.css";
import axios from "axios";
import { Context } from "../../context/Context";

function Write() {
  const titleRef = useRef();
  const descRef = useRef();
  const [file, setFile] = useState();
  const { user } = useContext(Context);

  const handleWrite = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title: titleRef.current.value,
      desc: descRef.current.value,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch {}
    }
    try {
      const res = axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (error) {}
  };

  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleWrite}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            ref={titleRef}
            className="writeInput"
            autoFocus={true}
            type="text"
            placeholder="Title"
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            ref={descRef}
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}

export default Write;
