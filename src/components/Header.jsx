import React from "react";
import Button from "./Button";

function Header () {
    return (
        <>
        <div className="üst-button">
    <Button type="outline">Skills</Button>
    <Button type="outline">Projects</Button>
    <Button type="primary">Hire me</Button>
        </div>
        
        </>
    )
}

export default Header