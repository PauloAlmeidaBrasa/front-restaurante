import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Layout from './pages/comuns/nav-layout-default';
import GetVendas from './pages/vendas';
import GetCardapiosardapios from './pages/cardapios';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/vendas" element={<GetVendas />} />
        <Route path="/cardapios" element={<GetCardapiosardapios />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App;
