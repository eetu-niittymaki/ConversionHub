import React from "react";
import "./Header.css"

const Header = ({children, sendToParent}) => {
    return(
        <div className="main">
            <span style={{color:"black"}}>Conversion</span><span style={{color:"white"}}>Hub</span>
            <div className="container">
                {children.map(child => (
                    <h3 className="children" onClick={() => sendToParent(child.props.children)}>{child}</h3>
                ))}
            </div>
        </div>
    )
}

export default Header