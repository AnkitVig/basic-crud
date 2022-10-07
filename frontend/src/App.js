import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/home';
import Create from './components/create';
import Edit from './components/edit';
import View from './components/view';



function App() {
  return (
    <div className="container">
      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <div className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link to={"/"} className="nav-link"> Home</Link>
          </li>
          <li className='nav-item'>
            <Link to={"/create"} className="nav-link"> Create</Link>
          </li>
        </div>
      </nav>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/create' element={<Create />}></Route>
          <Route path='/edit/:id' element={<Edit />}></Route>
          <Route path='/view/:id' element={<View />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
