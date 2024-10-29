import { useState } from "react"
import { register } from "../utils/register";

function Register() {
    async function submitHandler(event) {
        event.preventDefault();
        await register(email,username,password)
    }
    const [email,setEmail] = useState();
    const [username,setUsername] = useState();
    const [password,setPassword] = useState()
    return (
        <form onSubmit={submitHandler}>
            <input onChange={(event) => setEmail(event.target.value)} placeholder="Email"/>
            <br></br>
            <input onChange={(event) => setUsername(event.target.value)} placeholder="Username"/>
            <br></br>
            <input onChange={(event) => setPassword(event.target.password)} placeholder="Password"/>
            <br></br>
            <button type="submit">SUBMIT</button>
        </form>
    )
}

export default Register;