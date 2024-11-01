export async function register(email, username, password) {
    try {
        const res = await fetch(
            "https://m58restapi-production.up.railway.app/addUser",
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
    } catch (error) {
        console.log(error);
    }
};
