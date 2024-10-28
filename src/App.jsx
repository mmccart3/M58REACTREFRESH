import { useState } from 'react'
import './App.css'
import Box from './components/box'

function App() {
const [user,setUser] = useState("Harry");

  return (
    <>
    <h1>My React Refresh App</h1>
    <Box name="George" />
    <Box name="Fred" />
    <Box name="Hermione" />
    <Box name={user} />
    </>
  )
}

export default App
