import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import NoteEntry from "./Note";
import CreateArea from "./CreateArea";
// import { getNotes } from "./getData";


function App() {
  
  
  // function notePush(inputNote) {
  //   if (inputNote.length === 0) return
  //   setItems((prevItems) => {
  //     return [...prevItems, inputNote]
  //   })
  // }

  // function noteDelete(id) {
  //   // let parentId = parseInt(event.target.parentNode.id, 10); //Note.jsx div'i seçmek için.
  //   // console.log(parentId);
  //   // setItems((prevItems) => prevItems.filter((_, index) => index !== parentId));
  // }
// getNotes();
  return (
    <div>
      <Header />
      <CreateArea />
      <NoteEntry />
      <Footer />
    </div>
  );
}

export default App;
