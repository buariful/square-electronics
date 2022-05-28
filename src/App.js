
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Shared/Navbar';
import Blog from './Pages/Blog';
import Home from './Pages/Home/Home';
import ProDetails from './Pages/Home/ProDetails';
import Footer from './Shared/Footer'
import Login from './Pages/Login/Login';
import Singup from './Pages/Login/Singup';
import RequireAuth from './Shared/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import NotFound from './Pages/NotFound';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import Protfolio from './Pages/Protfolio/Protfolio';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>

        <Route path='/prodetails/:id' element={
          <RequireAuth>
            <ProDetails></ProDetails>
          </RequireAuth>
        } />

        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        } >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='/dashboard/addreview' element={<AddReview></AddReview>}></Route>
          <Route path='/dashboard/myprofile' element={<MyProfile></MyProfile>}></Route>
        </Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Singup></Singup>}></Route>
        <Route path='/portfolio' element={<Protfolio />}></Route>


        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
