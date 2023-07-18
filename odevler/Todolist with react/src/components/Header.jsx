import React, { useState } from "react";

function Header({setItems}) {
    const [inputText, setInputText] = useState("");

    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue)
    }

    function itemsPush() {
        if(inputText.length===0) return
        setItems((prevItems) => {
            return [...prevItems, inputText]
        })
        setInputText("");
    }
    return (
        <div className="form">
            <input onChange={handleChange} type="text" value={inputText} />
            <button onClick={itemsPush}>
                <span>Add</span>
            </button>
        </div>)
}

export default Header;
