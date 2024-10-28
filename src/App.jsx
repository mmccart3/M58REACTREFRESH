import { useState } from 'react'
import './App.css'
import Box from './components/box'

function App() {
const [user,setUser] = useState("Harry");
const arrayOfNames = [{name:"George", age: 17},{name:"Fred", age :17}, {name:"Hermione", age:15}];

  return (
    <>
    <input onChange={(event) => setUser(event.target.value)}/>
    <h1>My React Refresh App</h1>
    <img src="https://picsum.photos/300" alt="some random photo" />
    <Box name={user} />
    {arrayOfNames.map ((item,index) => {
      return (
      <>
      <Box name ={item.name} age={item.age}/>
      </>
    )})}

    </>
  )
}

export default App
