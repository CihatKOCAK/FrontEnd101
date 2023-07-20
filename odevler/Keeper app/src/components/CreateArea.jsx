import React, { useState } from "react";

function CreateArea(props) {
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

    return (
        <div>
            <form>
                {isExpanded ? <input value={inputNote.title} onChange={handleChange} name="title" placeholder="Title" /> : null}

                <textarea value={inputNote.content} onChange={handleChange} onClick={Expand} name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} />

                {isExpanded ? <button onClick={(event) => {
                    props.notePush(inputNote);
                    setInputNote({ title: "", content: "" });
                    event.preventDefault();
                }}>Add</button> : null}
            </form>
        </div>
    );
}

export default CreateArea;
