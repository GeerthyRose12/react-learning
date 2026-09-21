import { useState } from "react";

function LoginForm() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(e) {
        console.log(e);

        e.preventDefault();

        console.log("Username:", username);
        console.log("Password:", password);
    }

    return (
        <form onSubmit={handleLogin}>

            <h2>Login</h2>

            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <br /><br />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <br /><br />

            <button type="submit">
                Login
            </button>

        </form>
    );
}

export default LoginForm;