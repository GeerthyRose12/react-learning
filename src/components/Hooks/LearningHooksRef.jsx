import react from "react"
import {useState,useEffect,useRef} from 'react'

// useRef

function LearningHooksRef () {
    const [input, setInput] = useState("")
    const inputRef = useRef()
    console.log("Getting rendered")

    useEffect(() => {
        console.log("use effect called")
        inputRef.current = input
    }, [input]);

    const display = () => console.log(inputRef.current)
    return (
        <div>
            <h1>Learning Hooks</h1>
            <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />
            <p>my name is {input}</p>
            <p>my name is{inputRef.current}</p>
            <button onClick={display}>Display</button>

        </div>

    )
}

export default LearningHooksRef