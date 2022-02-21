import React from 'react';
import { Home } from './routes/Home/Home';
import Global from './style/Global';
import {Routes, Route} from 'react-router-dom'
import { DetailsNews } from './routes/DetailsNews/DetailsNews';
import { Buscar } from './routes/Busca/Busca';
import { Not } from './routes/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Global />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/encarar-o-surf' element={<DetailsNews/>} />
        <Route path='/slug-aqui' element={<DetailsNews/>} />
        <Route path='/gXel1C4P7ffX0ZP2FPFv8w' element={<Buscar />} />
        <Route path='*' element={<Not />} />
      </Routes>
    </div>
  );
}

export default App;