import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './component/Navbar'
import Hero from './component/Hero'
import Presentation from './component/Presentation'
import Slider from './component/Slider'
import Vedio from './component/vedio'
import Time from './component/time'
import BoomArea from './component/BoomArea'
import Blogs from './component/blogs'
import Fotter from './component/Fotter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <NavBar/>
      <Hero/>
      <Presentation/>
      <Slider/>
      <Vedio/>
      <Time/>
      <BoomArea/>
      <Blogs/>
      <Fotter/>

    </>
  )
}

export default App
