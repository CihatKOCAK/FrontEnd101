import React from "react";
import contacts from "../contacts";
import Avatar from "./Avatar";
import Info from "./Info";

function createCard(nUmber){
    return <Card
    nUmber={nUmber}
    />
}

function Card(props) {
    const nUmber = props.nUmber - 1;
    return (
        <div className="card">
            <div className="top">
                <p>{contacts[nUmber].id}</p>
                <h2 className="name">{contacts[nUmber].name}</h2>
                <Avatar imgURL={contacts[nUmber].imgURL} />
            </div>
            <Info
                phone={contacts[nUmber].phone}
                email={contacts[nUmber].email}
            />
        </div>)
}

export {createCard};