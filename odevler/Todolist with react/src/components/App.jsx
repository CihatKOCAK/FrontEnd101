import React, { useState } from "react";
import Header from "./Header";
import ListsEntry from "./Lists";

function App() {
  const [items, setItems] = useState([]);

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <Header setItems={setItems} />
      <div>
        <ul>
          <ListsEntry items={items} eren={"eren"} />
        </ul>
      </div>
    </div>
  );
}

export default App;
