import React from "react";
import notes from "../notes";

function Note(props) {
  const {title, content} = props.note;
  
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}

function NoteEntry (){
  return(
  notes.map((notesData,index)=>(<Note key={index} note={notesData} />)))
}

export default NoteEntry;
