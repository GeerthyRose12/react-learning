import {useState} from 'react';



function Counter() {
    const [count, setCount] = useState(0)

    function increase () {
        setCount(count+1);
    }
    return(
        <div >
            <h2>Count : {count}</h2>
            <button onClick={increase}>Click me</button>
        </div>
    )
}

export default Counter