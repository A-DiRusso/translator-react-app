import React from 'react';
// V.1 The purpose of this component is to recive 
// some text and display it to the page


// V.2 will add 'translation' (toUpperCase)

// V.3 Accept a prop telling me what kind of translation to do

function toL33t(text) {
    const l33tDictionary = {
        'a': '4',
        'o': '0',
        'e': '3',
        'l': '1',
        'h': '#',
        's': '$',
        't': '7'
    };
    //convert text to array
    const asArray = text.split('');

    //for each letter translate to l33t
    const newArray = asArray.map(letter => {
        return l33tDictionary[letter.toLowerCase()] || letter;
    });
    //return the array as a string
    return newArray.join('');
}




function Output(props) {
    // return(
    //     <div>{
    //         props.transform === 'l33t' ?
    //           toL33t(props.text) :
    //           props.text.toUpperCase()
    //     }</div>
    // )
    // this is the better way to go about the above
    
    let displayText = props.text.toUpperCase();
    if(props.transform === 'l33t') {
        displayText =toL33t(props.text)
    }
    return (
        <div>{displayText}</div>
    ) 
}


export default Output