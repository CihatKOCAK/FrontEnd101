import React, { useState, useEffect } from "react";
import axios from "axios";


function NoteEntry() {


  const [APIData, setAPIData] = useState([])
  
  useEffect(() => {
    axios.get("https://64ba4ff75e0670a501d5f667.mockapi.io/notes").then((response) => {
      setAPIData(response.data);
    })
  }, [])

  function getNotes() {
    axios.get("https://64ba4ff75e0670a501d5f667.mockapi.io/notes")
      .then((response) => {
        setAPIData(response.data)
      })
  }

  function noteDelete(event) {
    let parentId = parseInt(event.target.parentNode.id, 10);
    axios.delete(`https://64ba4ff75e0670a501d5f667.mockapi.io/notes/${parentId}`).then(() => {
      getNotes()
    })
  }


  return (
    APIData.map((notes) => (
      <div id={notes.id} key={notes.id} className="note">
        <h1>{notes.title}</h1>
        <p>{notes.content}</p>
        <button className="deleteButton" onClick={noteDelete}>DELETE</button>
      </div>
    ))
  )
}

export default NoteEntry;
