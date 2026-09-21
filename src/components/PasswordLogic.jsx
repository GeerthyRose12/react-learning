import {useState} from 'react'

function PasswordLogic () {
    const [password ,setPassword] =useState(false);

    return (
       <div>
        <input type={password ? "text" : "password"} />
        <button onClick={()=> setPassword(!password)}>Show/Hide</button>
       </div>
    )
}

export default PasswordLogic