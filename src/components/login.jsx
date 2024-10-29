import { useState } from "react";

async function Login() {
    const [email,setEmail] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    async function submitHandler(event) {
        event.preventDefault();
        await login(email,username,password);
    }

    return (
        <>
        <hr></hr>
        <form onSubmit={submitHandler}>
            <input onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
            <input onChange={(event) => setUsername(event.target.value)} placeholder="Username" />
            <input onChange={(event) => setPassword(event.target.value)} placeholder="Password" />
            <button type="submit">SUBMIT</button>
        </form>
        <hr></hr>
        </>
    )
}

export default Login;