import React from "react";
import "./Header.css"

const Header = ({children, sendToParent}) => {
    return(
        <div className="main">
            <span onClick={() => sendToParent("")}>
                <span className="titleStart">Conversion</span><span className="titleEnd">Hub</span>
            </span>
            <div className="container">
                {children.map(child => (
                    <h3 className="children" onClick={() => sendToParent(child.props.children)}>{child}</h3>
                ))}
            </div>
        </div>
    )
}

export default Header