import React, { useState } from "react";

function App() {
  const [inputText,setInputText]=useState("");
  const [items,setItems]=useState([]);

  function handleChange(event){
    const newValue=event.target.value;
    setInputText(newValue)
  }

  function itemsPush(){
    setItems((prevItems)=>{
      return [...prevItems,inputText]
    })
    setInputText("");
  }

  function Lists(props){
    const inputText=props.item;
    return (
      <li>{inputText}</li>
    )
  }

  function ListsEntry(){
    return (
      items.map((itemsData, index) => (<Lists key={index} item={itemsData} />)))
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={itemsPush}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <ListsEntry />
        </ul>
      </div>
    </div>
  );
}

export default App;
