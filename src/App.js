import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import About from './Components/About';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import Pagenotfound from './Components/Pagenotfound';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>

     <Route path="/" element={<Home />}/>
     <Route path="/Dashboard" element={<Dashboard />} />
     <Route path="/About" element={<About />} />
     <Route path='*' element={<Pagenotfound />} />

      </Routes>

      </BrowserRouter>
      
    </div>
  )
}

export default App
