import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/HomePage/Home.jsx';
import Properties from './Components/Properties/Properties.jsx';
import PropertyListing from './Components/PropertyListing/PropertyListing.jsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App />}>
      <Route path='/' element={<Home />}/>
      <Route path='properties' element={<Properties />}/>
      <Route path='propertieslisting' element={<PropertyListing />}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </ThemeProvider>

  </React.StrictMode>,
)
