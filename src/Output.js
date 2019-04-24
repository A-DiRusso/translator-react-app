// V.1 The purpose of this component is to recive 
// some text and display it to the page


// V.2 will add 'translation' (toUpperCase)

import React from 'react';


function Output(props) {
    return(
        <div>
            {props.text.toUpperCase()}
        </div>
    )
}


export default Output