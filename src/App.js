import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Shared/Navbar';
import Blog from './Pages/Blog';
import Login from './Pages/Login';
import Home from './Pages/Home/Home';
import ProDetails from './Pages/Home/ProDetails';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/prodetails/:id' element={<ProDetails></ProDetails>} />
      </Routes>
    </div>
  );
}

export default App;
