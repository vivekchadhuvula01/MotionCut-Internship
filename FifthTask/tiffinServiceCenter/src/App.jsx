import React from 'react'
import './index.css'
import Tiffins from './pages/Tiffins/Tiffins.jsx';
import Thali from './pages/Thali/Thali.jsx';
import Registration from './pages/Register/Registration.jsx';
import Home from './pages/Home/Home.jsx';
import Help from './pages/Help/Help.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/help' element={<Help />} />
        <Route path='/thali' element={<Thali />} />
        <Route path='/tiffins' element={<Tiffins />} />
        
        
     </Routes>
    </BrowserRouter>
  )
}

export default App
