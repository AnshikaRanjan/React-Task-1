import React, { useState } from "react";
import "./Counter.css"

export function Counter() {
    const [word,setWord]=useState(0)
    const [val, setVal] = useState('')
    const handleChange = (e) => {
        const data = e.target.value.split(' ')
        setWord(data.length)
        setVal(e.target.value)
        if(e.target.value == ''){
            setWord(0)
        }
    }

    return (
        <div>
            <center>
                <h1> Responsive Paragraph Word Counter: </h1>
                <textarea value={val} onChange={(e) => handleChange(e)} />
                <h3> Letters Count: {val.length}</h3>
                <h3> Word Count: {word} </h3>
            </center>
        </div>
    )
}