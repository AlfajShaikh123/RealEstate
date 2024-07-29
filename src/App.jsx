import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Layouts/header'
import Footer from './Components/Layouts/footer'
import Banner from './Components/banner/banner'
import Home from './Components/HomePage/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
    <Home/>
     <Footer/>
    </>
  )
}

export default App
