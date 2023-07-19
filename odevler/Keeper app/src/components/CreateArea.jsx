import React, { useState } from "react";

function CreateArea(props) {
    const [inputNote, setInputNote] = useState([
        {
            title: "",
            content: ""
        }
    ])

    function handleChange(event) {
        const { name, value } = event.target;
        setInputNote(prevValue=>{
            return {...prevValue,[name]:value}
        })
    }

    return (
        <div>
            <form>
                <input value={inputNote.title} onChange={handleChange} name="title" placeholder="Title" />
                <textarea value={inputNote.content} onChange={handleChange} name="content" placeholder="Take a note..." rows="3" />
                <button onClick={(event)=>{
                    props.notePush(inputNote);
                    event.preventDefault();
                }}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
