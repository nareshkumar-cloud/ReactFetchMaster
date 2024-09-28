
import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './componets/Home'
import ProdectDiteal from './componets/ProdectDiteal'
import Prodect from './componets/Prodect'

const App = () => {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/prodects' element={<Prodect/>}/>
      <Route path='/prodects/:id' element={<ProdectDiteal/>}/>
    </Routes>
    
    </BrowserRouter>
  
  )
}

export default App
