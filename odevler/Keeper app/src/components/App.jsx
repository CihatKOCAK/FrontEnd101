import React ,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import NoteEntry from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes,setItems]=useState([]);

  function notePush(inputNote){
    if (inputNote.length === 0) return
    setItems((prevItems) => {
      return [...prevItems, inputNote]
    })
  }

  return (
    <div>
      <Header />
      <CreateArea notePush={notePush}/>
      <NoteEntry notes={notes}/>
      <Footer />
    </div>
  );
}

export default App;
