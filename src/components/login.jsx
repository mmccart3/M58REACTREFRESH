import { useState } from "react";
import { login } from "../utils/login";

// eslint-disable-next-line react/prop-types
function Login({setIsLoggedIn}) {
    const [email,setEmail] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    async function submitHandler(event) {
        event.preventDefault();
        const status = await login(email,username,password);
        if (status === 200) {
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
        }
        }
    

    return (
        <>
        <hr></hr>
        <h2>Login Form</h2>
        <form onSubmit={submitHandler}>
            <input onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
            <br />
            <input onChange={(event) => setUsername(event.target.value)} placeholder="Username" />
            <br />
            <input onChange={(event) => setPassword(event.target.value)} placeholder="Password" />
            <br />
            <button type="submit">SUBMIT</button>
            <br />
        </form>
        <hr></hr>
        </>
    )
}

export default Login;