import React from "react";

function Info({ phone,email }) {
    return (
        <div className="bottom">
            <p className="info">{phone}</p>
            <p className="info">{email}</p>
        </div>
    )
}


export default Info;