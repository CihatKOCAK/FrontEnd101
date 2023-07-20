import React from "react";

function NoteEntry(props) {
  return (
    props.notes.map((notesData, index) => (
      <div id={index} key={index} className="note">
        <h1>{notesData.title}</h1>
        <p>{notesData.content}</p>
        <button onClick={props.onChecked}>DELETE</button>
      </div>
    ))
  )
}

export default NoteEntry;
