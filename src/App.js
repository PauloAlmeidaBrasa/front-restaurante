import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Layout from './pages/comuns/nav-layout-default';
import GetAllUser from './pages/vendas';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/vendas" element={<GetAllUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )

  // <Route index element={<Home />} />

  // <Route element={<GetAllUser />} />


  // return (
  //   <Router>
  //     <Routes>
  //       <Route path="/" caseSensitive={false} element={<Home />} />
  //     </Routes>
  //   </Router>
  // );
}



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
