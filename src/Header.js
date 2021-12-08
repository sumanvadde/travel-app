import React from "react";
import Button from "./Button";

function Header (props) {
    return(
        <div style={{backgroundColor: props.color}}>
<h1> Header</h1>
<Button name='Join Now' />
<Button name='Register Now' />
        </div>
        
    )
};

export default Header;