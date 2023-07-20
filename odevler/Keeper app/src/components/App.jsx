import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import NoteEntry from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setItems] = useState([]);

  function notePush(inputNote) {
    if (inputNote.length === 0) return
    setItems((prevItems) => {
      return [...prevItems, inputNote]
    })
  }

  function noteDelete(event) {
    let parentId = parseInt(event.target.parentNode.id, 10); //Note.jsx div'i seçmek için.
    console.log(parentId);
    setItems((prevItems) => prevItems.filter((_, index) => index !== parentId));
  }

  return (
    <div>
      <Header />
      <CreateArea notePush={notePush} />
      <NoteEntry notes={notes} onChecked={noteDelete} />
      <Footer />
    </div>
  );
}

export default App;
