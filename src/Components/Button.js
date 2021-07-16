// Let's update the button text when clicked
// how would we go about displaying our form only when the button is clicked? it's not automatically visible in the Content div


import React, { useState } from 'react'

function Button({ onButtonClick }){
    // const [buttonColor, setButtonColor] = useState('#6CA696')
    // const [message, setMessage] = useState('Add New Artist')
    const [message, setMessage] = useState(true)
    // if message is true, text should be 'Add New Artist'
    // if not, should be 'Hide Form'

    const updateButton = () =>{
        onButtonClick()
        setMessage(!message)
    }

    return(   
        <button onClick={() => updateButton()}>{message === true ? 'Add New Artist':'Hide Form'}</button>

    )
}

export default Button

// style={{backgroundColor: buttonColor}}