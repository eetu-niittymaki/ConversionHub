import React from "react";

const ChangeButton = ({functions}) => {
    return (
        <button onClick={() => functions()}>
            <img src={process.env.PUBLIC_URL + "/images/arrow.png"} alt="Change"/> 
        </button> 
    )
}

export default ChangeButton