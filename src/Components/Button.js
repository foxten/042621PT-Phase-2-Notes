// Let's update the button text when clicked
// how would we go about displaying our form only when the button is clicked? it's not automatically visible in the Content div


import React, { useState } from 'react'

function Button({ onButtonClick }){
    const [buttonColor, setButtonColor] = useState('#6CA696')

    return(    
        <button onClick={() => onButtonClick(buttonColor, setButtonColor)} style={{backgroundColor: buttonColor}}>Change Button Color!</button>
    )
}

export default Button