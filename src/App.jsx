import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Moviedetails from "./pages/Moviedetails";
import Seatlayout from "./pages/Seatlayout";
import Favourites from "./pages/Favourites";
import { Toaster } from 'react-hot-toast';
import Footer from "./components/Footer";
import Layout from "./pages/Admin/Layout";
import Dashboard from "./pages/Admin/Admindashboard";
import Showslist from "./pages/Admin/Showslist";
import Bookingslist from "./pages/Admin/Bookingslist";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Mybookings from "./pages/Bookingsdetails";
import ProtectedRoute from "./components/ProtectedRoute";
import Payment from "./pages/Payment";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('user'));
  const isAdminroute = useLocation().pathname.startsWith('/admin');

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        background: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(25px)',
        zIndex: -1,
      }}>
        <img
          src="/companyname.png"
          alt="Moving background"
          style={{
            width: '750px',
            height: '150px',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            animation: 'moveLeftToRight 5s linear infinite',
            filter: 'blur(3px)'
          }}
        />
      </div>
      <Toaster />
      {!isAdminroute && <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/movies'
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Movies />
            </ProtectedRoute>
          }
        />
        <Route
          path='/movies/:id'
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Moviedetails />
            </ProtectedRoute>
          }
        />
        <Route
          path='/movies/:id/:date'
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Seatlayout />
            </ProtectedRoute>
          }
        />
        <Route
          path='/favourites'
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Favourites />
            </ProtectedRoute>
          }
        />
        <Route path='/payment' element={<Payment/>} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route
          path="/my-bookings"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Mybookings isLoggedIn={isLoggedIn} />
            </ProtectedRoute>
          }
        />
        <Route path='/admin/*' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='list-shows' element={<Showslist />} />
          <Route path='list-bookings' element={<Bookingslist />} />
        </Route>
      </Routes>
      {!isAdminroute && <Footer />}
      <style jsx>{`
        @keyframes moveLeftToRight {
          0% {
            left: -454px;
          }
          100% {
            left: calc(100vw);
          }
        }
      `}</style>
    </div>
  );
};

export default App;