import React from "react";

function ListsEntry(props) {
    return (
        props.items.map((itemsData, index) => (
            <li onClick={props.onChecked} id={index} key={index}>{itemsData}</li>))
    )
}

export default ListsEntry;