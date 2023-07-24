import React, { useState } from "react";
import axios from "axios";

function CreateArea() {
    const [inputNote, setInputNote] = useState({
        title: "",
        content: ""
    }
    )
    const [isExpanded, setIsExpanded] = useState(false);


    function handleChange(event) {
        const { name, value } = event.target;
        setInputNote(prevValue => {
            return { ...prevValue, [name]: value }
        })
    }

    function Expand() {
        setIsExpanded(true);
    }

    function postData() {
        if (inputNote.length===0) return
        axios.post("https://64ba4ff75e0670a501d5f667.mockapi.io/notes", {
            title: inputNote.title,
            content: inputNote.content
        })
    }

    return (
        <div>
            <form>
                <input value={inputNote.title} onChange={handleChange} onClick={Expand} name="title" placeholder="Title" rows={isExpanded ? 3 : 1} />

                {isExpanded ? <textarea value={inputNote.content} onChange={handleChange} name="content" placeholder="Take a note..." /> : null}

                {isExpanded ? <button onClick={() => {
                    // props.notePush(inputNote);
                    // setInputNote({ title: "", content: "" });
                    // event.preventDefault();
                    // setCount(count+1);
                    postData();
                }}>Add</button> : null}
            </form>
        </div>
    );
}

export default CreateArea;
