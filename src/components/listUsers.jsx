import { useState } from "react";
import readCookie from "../utils/readCookie";

function ListUsers() {
    const [userlist,setUserlist] =useState([]);
    async function clickHandler1(event) {
        let token = readCookie("jwt_token");
        console.log(token);
        
        let authorization = "Bearer " + token;

        const res= await fetch(
            "http://localhost:5002/listAllUsers",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": authorization
                }
            }
        );
        let responseStatus = res.status;
        if(responseStatus === 200) {
            setUserlist(await res.json())
            console.log(userlist);
            
        } else {
            console.log("userlist not found");
            setUserlist([]);
        }
        
    }
    return(
        <>
        <hr></hr>
        <h2>Authorized Users</h2>
        <button onClick={clickHandler1}>Get Latest List of Users</button>
        <br></br>
        {
            userlist.map((item,index) =>{
                return (
                    <>
                    <h3>Username = {item.username}</h3>
                    <h3>User Email = {item.email}</h3>
                    </>
                )
            })
        }
        <hr></hr>
        </>
    )
}

export default ListUsers;