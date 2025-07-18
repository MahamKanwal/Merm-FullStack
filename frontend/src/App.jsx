

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Navigation from './components/Navigation';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Footer from './components/Footer';
import LoginPage from './Pages/LoginPage';
import SignUp from './Pages/Signup';
import Cart from "./Pages/Cart" 
import Logout from "./Pages/Logout" 
import AdminPage from './Pages/AdminPage';
import Products from './Pages/Products';
import { ToastContainer } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const location = useLocation()
  if(location.pathname=="/admin"){
    return <AdminPage />
  }



  return (
		<>
			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<Navigation />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/about' element={<About />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/signup' element={<SignUp />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/products' element={<Products />} />
				<Route path='/logout' element={<Logout />} />
				<Route path='/admin' element={<AdminPage />} />
				<Route path='*' element={<div>Not found</div>} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;