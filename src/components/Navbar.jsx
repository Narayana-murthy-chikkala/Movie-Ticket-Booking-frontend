import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MenuIcon, XIcon, UserIcon } from "lucide-react";
import toast from "react-hot-toast";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const isAdmin = isLoggedIn && user?.email === 'admin@gmail.com';

  const handleSignOut = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    toast.success('Logged out successfully', { duration: 3000, position: 'top-right' });
    navigate("/");
    setIsOpen(false);
  };

  const handleBookingsClick = () => {
    if (!isLoggedIn) {
      toast.error('Please log in to view this page', { duration: 3000, position: 'top-right' });
      navigate("/login");
      setIsOpen(false);
      return;
    }
    scrollTo(0, 0);
    setIsOpen(false);
    navigate("/my-bookings");
  };

  const handleUserIconClick = () => {
    if (isAdmin) {
      navigate('/admin');
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5 bg-black/80 backdrop-blur-md shadow-lg">
      {/* Logo */}
      <Link to="/" className="flex-shrink-0">
        <h1 className="text-3xl font-semibold tracking-tight">
          <span
            style={{
              fontFamily: "Algerian, serif",
              color: "#e63946",
            }}
          >
            M
          </span>
          <span
            style={{
              fontFamily: '"Baskerville Old Face", serif',
              color: "#f1f1f1",
            }}
          >
            ovie 
          </span>
          <span
            style={{
              fontFamily: "Algerian, serif",
              color: "#e63946",
            }}
          >
            M
          </span>
          <span
            style={{
              fontFamily: '"Baskerville Old Face", serif',
              color: "#f1f1f1",
            }}
          >
            agic
          </span>
        </h1>
      </Link>

      {/* Main Navigation Links (Centered in Mobile Menu, Desktop View) */}
      <div
        className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-semibold max-md:text-xl z-50 flex flex-col md:flex-row items-center max-md:justify-center gap-6 md:gap-10 py-4 max-md:h-screen max-md:bg-black/90 md:bg-transparent overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-md:w-full' : 'max-md:w-0'
        }`}
      >
        <XIcon
          className="md:hidden absolute top-6 right-6 w-7 h-7 text-white hover:text-red-500 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
        <Link
          to="/"
          className="hover:text-primary transition duration-200"
          onClick={() => {
            scrollTo(0, 0);
            setIsOpen(false);
          }}
        >
          Home
        </Link>
        <Link
          to="/movies"
          className="hover:text-primary transition duration-200"
          onClick={() => {
            scrollTo(0, 0);
            setIsOpen(false);
          }}
        >
          Explore Movies
        </Link>
        <div
          className="hover:text-primary transition duration-200 cursor-pointer"
          onClick={handleBookingsClick}
        >
          Bookings
        </div>
        <Link
          to="/favourites"
          className="hover:text-primary transition duration-200"
          onClick={() => {
            scrollTo(0, 0);
            setIsOpen(false);
          }}
        >
          Watchlist
        </Link>
        {/* Auth Links inside Mobile Menu */}
        {isOpen && (
          <div className="flex flex-col items-center gap-4 md:hidden">
            {isLoggedIn ? (
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 text-green-500 font-medium rounded-md shadow-sm hover:shadow-md transition duration-200 ease-in-out">
                  <UserIcon
                    className="w-6 h-6 text-green-500 hover:text-green-400 transition duration-200 cursor-pointer"
                    aria-label="User profile"
                    onClick={handleUserIconClick}
                  />
                  {isAdmin && (
                    <span
                      className="text-white hover:text-gray-200 transition duration-200 cursor-pointer"
                      onClick={handleUserIconClick}
                    >
                      Admin
                    </span>
                  )}
                  {!isAdmin && (
                    <span className="text-white hover:text-gray-200 transition duration-200">
                      User
                    </span>
                  )}
                </div>
                <button
                  className="px-4 py-2 text-red-600 font-medium rounded-md shadow-sm hover:shadow-md transition duration-200 cursor-pointer ease-in-out"
                  onClick={handleSignOut}
                >
                  Sign out
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-2 px-4 py-2 text-green-500 font-medium rounded-md shadow-sm hover:shadow-md transition duration-200 ease-in-out"
                onClick={() => {
                  scrollTo(0, 0);
                  setIsOpen(false);
                }}
              >
                Login
              </Link>
            )}
          </div>
        )}
      </div>

      {/* Auth Links (Right-Aligned for Desktop) */}
      <div className="hidden md:flex items-center gap-4">
        {isLoggedIn ? (
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-4 py-2 text-green-500 font-medium rounded-md shadow-sm hover:shadow-md transition duration-200 ease-in-out">
              <UserIcon
                className="w-6 h-6 text-green-500 hover:text-green-400 transition duration-200 cursor-pointer"
                aria-label="User profile"
                onClick={handleUserIconClick}
              />
              {isAdmin && (
                <span
                  className="text-white hover:text-gray-200 transition duration-200 cursor-pointer"
                  onClick={handleUserIconClick}
                >
                  Admin
                </span>
              )}
              {!isAdmin && (
                <span className="text-white hover:text-gray-200 transition duration-200">
                  User
                </span>
              )}
            </div>
            <button
              className="px-4 py-2 text-red-600 font-medium rounded-md shadow-sm hover:shadow-md transition duration-200 cursor-pointer ease-in-out"
              onClick={handleSignOut}
            >
              Sign out
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="flex items-center gap-2 px-4 py-2 text-green-500 font-medium rounded-md shadow-sm hover:shadow-md transition duration-200 ease-in-out"
            onClick={() => {
              scrollTo(0, 0);
              setIsOpen(false);
            }}
          >
            Login
          </Link>
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <MenuIcon
        className="md:hidden w-8 h-8 text-white hover:text-primary cursor-pointer transition"
        onClick={() => setIsOpen(!isOpen)}
      />
    </div>
  );
};

export default Navbar;