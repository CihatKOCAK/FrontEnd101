import React, { useState } from "react";
import Header from "./Header";
import ListsEntry from "./Lists";

function App() {
  const [items, setItems] = useState([]);

  function DeleteEntry(event) {
    console.log(event.target.id);
    setItems((prevItems) => {
      items.splice(event.target.id, 1)
      return [...prevItems]
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <Header setItems={setItems} />
      <div>
        <ul>
          <ListsEntry items={items} onChecked={DeleteEntry} />
        </ul>
      </div>
    </div>
  );
}

export default App;
