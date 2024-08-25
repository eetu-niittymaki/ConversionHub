import React, { useState } from "react";
import "./Header.css"

const Header = ({children, sendToParent}) => {
    const [selectedChild, setSelectedChild] = useState(null)

    const handleClick = (child) => {
        setSelectedChild(child)
        sendToParent(child)
    }

    return(
        <div className="main">
            <span onClick={() => handleClick("")}>
                <span className="titleStart">Conversion</span>
                <img src={process.env.PUBLIC_URL + "/images/arrow.png"} alt="Arrow" className="titleImg"/>
                <span className="titleEnd">Hub</span>
            </span>
            <div className="container">
                {children.map(child => (
                    <h3 key={child.props.children} 
                        className={`children ${selectedChild === child.props.children ? 'active' : ''}`}
                        onClick={() => handleClick(child.props.children)}
                    >
                        {child}
                    </h3>
                ))}
            </div>
        </div>
    )
}

export default Header