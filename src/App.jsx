import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './component/Navbar'
import Hero from './component/Hero'
import Presentation from './component/Presentation'
import Slider from './component/Slider'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <NavBar/>
      <Hero/>
      <Presentation/>
      <Slider/>

    </>
  )
}

export default App
