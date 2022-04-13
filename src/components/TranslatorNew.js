import React, { useState } from 'react'
import rot13 from 'rot-thirteen'

function TranslatorNew() {
    const [ initialText, setInitialText ] = useState('')

    const updateText = (event) => {
        console.log(event.target.value);
        setInitialText(event.target.value)
    }

    return(
        <div>
            <h1>Translator</h1>
            <input type="text" value={initialText} onChange={updateText}>
            </input>
            <p>{initialText}</p>
            <p>{rot13(initialText)}</p>
        </div>
    )
}

export default TranslatorNew; 