
import './App.css'
import Header from './Components/Layouts/header'
import Footer from './Components/Layouts/footer'

import Home from './Components/HomePage/Home'
import { Outlet } from "react-router-dom";

function App() {
  

  return (
    <>
     <Header/>
     <Outlet></Outlet>
     <Footer/>
    </>
  )
}

export default App
