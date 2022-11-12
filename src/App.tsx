import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from './components/sidebar';

import Home from './pages/metodoSistema';
import Upload from './pages/uploadArquivo';
import Relatorios from './pages/relatorios';
import Politicas from './pages/politicas';

const App: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/upload' element={<Upload />} />            
          <Route path='/relatorios' element={<Relatorios />} />    
          <Route path='/politicas' element={<Politicas />} />
        </Routes>
      </Router> 
    </>
  )
}

export default App