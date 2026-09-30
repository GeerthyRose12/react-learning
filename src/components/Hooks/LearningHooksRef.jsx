

import react from "react"
import{useState, useRef} from "react"

const LearningHooksRef =() => {
    // const [count, setCount] = useState(0)
    const countRef  = useRef(0)
    function handleClick () {
        // setCount(count + 1)
        countRef.current = countRef.current + 1
         console.log(countRef.current);
    }
    return(
        <div>
            <h1>Learning Hooks</h1>
            <h3>Count : {countRef.current}</h3>
            <button onClick = {handleClick}>click</button>
        </div>
    )
}

export default LearningHooksRef


// import { useRef } from "react";

// function LearningHooksRef() {

//   const inputRef = useRef(null);

//   const handleFocus = () => {
//     inputRef.current.focus();
//   };

//   return (
//     <div>

//       <input
//         type="text"
//         ref={inputRef}
//         placeholder="Enter your name"
//       />

//       <button onClick={handleFocus}>
//         Focus Input
//       </button>

//     </div>
//   );
// }

// export default LearningHooksRef;



