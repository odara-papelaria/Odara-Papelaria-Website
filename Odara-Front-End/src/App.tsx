import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { Clientes } from './screens/Clientes';
import { Contas } from './screens/Contas';
import { Estoque } from './screens/Estoque';
import { Fornecedor } from './screens/Fornecedor';
import { Login } from './screens/Login';
import { Princicpal } from './screens/Princicpal';
import { Vendas } from './screens/Vendas';
import { GlobalStyle } from './styles/global';

export function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/principal' element={<Princicpal/>}/>
          <Route path='/estoque' element={<Estoque/>}/>
          <Route path='/fornecedor' element={<Fornecedor/>}/>
          <Route path='/vendas' element={<Vendas/>}/>
          <Route path='/clientes' element={<Clientes/>}/>
          <Route path='/contas' element={<Contas/>}/>
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

