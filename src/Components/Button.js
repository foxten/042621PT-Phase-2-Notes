// Let's update the button text when clicked
// how would we go about displaying our form only when the button is clicked? it's not automatically visible in the Content div


import React, { useState } from 'react';
import { useHistory } from "react-router-dom";


function Button({ onButtonClick }){
    const [message, setMessage] = useState(true)
    // if message is true, text should be 'Add New Artist'
    // if not, should be 'Hide Form'
    let display = (message ? 'Add New Artist':'Hide Form')
    const history = useHistory()
    // ternary to gauge what should be added to the end of the URL

    const updateButton = () =>{
        setMessage(!message)
        onButtonClick()
        // console.log(history)
        // when clicked, I should also update the URL to match 
        // whether the form is displayed or not
        // message ?  history.push('/add-artist') : history.push('/')
        history.push((message ? '/add-artist': '/albums'))
    }

    return(   
        <button onClick={() => updateButton()}>{display}</button>
    )
}

export default Button

