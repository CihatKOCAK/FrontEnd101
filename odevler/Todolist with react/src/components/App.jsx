import React, { useState } from "react";
import ListsEntry from "./Lists";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);

  function itemsPush(inputText) {
    if (inputText.length === 0) return
    setItems((prevItems) => {
      return [...prevItems, inputText]
    })
  }

  function DeleteEntry(event) {
    const itemId = parseInt(event.target.id, 10);
    setItems((prevItems) => prevItems.filter((_, index) => index !== itemId));
    console.log(itemId)
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea itemsPush={itemsPush} />
      <div>
        <ul>
          <ListsEntry items={items} onChecked={DeleteEntry} />
        </ul>
      </div>
    </div>
  );
}

export default App;
