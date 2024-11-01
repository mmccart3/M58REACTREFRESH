import writeCookie from "./writeCookie";

export async function login(email,username,password) {
    try {
        const res = await fetch(
            "https://m58restapi-production.up.railway.app/login",
            {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(
                    {
                        email: email,
                        username: username,
                        password: password
                    }
                )
            }
        )
        const data = await res.json();
        console.log(data);
        const token = data.token
        console.log(token);
        console.log(res.status);
        
        writeCookie("jwt_token", token, 2)
        return res.status
    } catch (error) {
        console.log(error);
    }
}