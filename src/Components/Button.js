// Let's update the button text when clicked
// how would we go about displaying our form only when the button is clicked? it's not automatically visible in the Content div

import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

function Button({ onButtonClick }){
    const history = useHistory()
    const [message, setMessage] = useState(true)
    let display = (message ? 'Add New Artist':'Hide Form')
    
    const updateButton = () =>{
        setMessage(!message)
        onButtonClick()
        history.push(message ? '/add-artist' : '/albums')
    }

    return(   
        <button onClick={() => updateButton()}>{display}</button>

    )
}

export default Button
