import React from "react";

function Avatar({imgURL}){
return (<img
    src={imgURL}
    className="circle-img"
    alt="avatar_img"
/>)
}


export default Avatar;