import react from "react"
import {useState} from "react";

const UseMemoLearn = () => {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)

    const doubleNumber = slowFunction(number);

    const themeStyles = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    };
    return (
        <div>
        <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
        <button onClick={() => setDark((curr) => !curr)}>toggle theme</button>
        <div style={themeStyles}>{doubleNumber}</div>
</div>
    )
};
export default UseMemoLearn;


function slowFunction(num) {
    for (let i = 0; i < 1000000000; i++) {}
        return num * 2;
}


