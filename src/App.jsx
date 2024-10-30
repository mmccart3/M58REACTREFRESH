import { useEffect, useState } from 'react'
import './App.css'
import Post from './components/post';
import Register from './components/register';
import Login from './components/login';
import ListUsers from './components/listUsers';

function App() {

const [arrayOfPictures,setArrayOfPictures] = useState([]);
const [isLoggedIn,setIsLoggedIn] = useState(false);

async function fetchImages() {
  const fetchedImages = await fetch("https://picsum.photos/v2/list?page=3&limit=25");
  const dataReceived = await fetchedImages.json();
  setArrayOfPictures(dataReceived);
  console.log("hello");
}

function loginLogout() {
  setIsLoggedIn(!isLoggedIn);
  console.log(isLoggedIn);
}


useEffect(() => {
  fetchImages() 
},[])


  return (
    <>
    <ListUsers />
    <Register />
    <Login setIsLoggedIn={setIsLoggedIn} />
    <button onClick={() => loginLogout()}>{isLoggedIn ? <p>Logout</p> : <p>Login</p>}</button>
    <br></br>
    <h1>My React Refresh App</h1>
  {isLoggedIn && 
  <>
    {arrayOfPictures.map((item) => {
      return (
        // eslint-disable-next-line react/jsx-key
        <Post url={item.download_url} author={item.author}></Post>
      )
    })}
    </>
}
    </>
  )
}

export default App
