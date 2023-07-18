import React from "react";

function ListsEntry(props) {

    return (
        props.items.map((itemsData, index) => (
            <li key={index}>{itemsData}</li>))

    )
}

export default ListsEntry;