import React from "react";
import {createCard} from "./Card";
import contacts from "../contacts";

function App() {
    return (
        <div>
            <h1 className="heading">My Contacts</h1>
            {contacts.map((contact, index) => createCard(index + 1))}
        {/* <Card 
        nUmber={1}
        />
        <Card 
        nUmber={2}
        />
        <Card 
        nUmber={3}
        /> */}
        </div>
    );
}

export default App;