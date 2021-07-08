// Let's update the button text when clicked

import React, { useState } from 'react'

function Button({ onButtonClick }){
    const [buttonColor, setButtonColor] = useState('#6CA696')

    return(    
        <button onClick={() => onButtonClick( buttonColor, setButtonColor)} style={{backgroundColor: buttonColor}}>Change Button Color!</button>
    )
}

export default Button