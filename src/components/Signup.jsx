import React, { useState } from 'react';
  import { Link, useNavigate } from 'react-router-dom';
  import toast from 'react-hot-toast';

  const Signup = ({ setIsLoggedIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
    e.preventDefault();

      // Custom email validation
    if (!email.includes('@') || !email.includes('.')) {
      toast.error('Please enter a valid email address.', { duration: 3000, position: 'top-right' });
      return;
    }

    try {
      const response = await fetch('https://movie-ticket-booking-system-9hwv.vercel.app/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.success) {
        localStorage.setItem('user', JSON.stringify(data.user));
        setIsLoggedIn(true);
        toast.success(data.message, { duration: 3000, position: 'top-right' });
        navigate('/movies');
      } else {
        toast.error(data.message, { duration: 3000, position: 'top-right' });
      }
    } catch (err) {
      console.error('Signup error:', err);
      toast.error('Failed to connect to the server', { duration: 3000, position: 'top-right' });
    }};

    return (
      <div className="min-h-screen bg-black/80 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md bg-white/10 backdrop-blur-md p-8 rounded-lg border border-gray-500/20 shadow-lg">
          <h2 className="text-3xl font-semibold text-white text-center mb-6">
            <span style={{ fontFamily: 'Algerian, serif', color: '#e63946' }}>S</span>
            <span style={{ fontFamily: '"Baskerville Old Face", serif', color: '#f1f1f1' }}>ign Up</span>
          </h2>
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full px-4 py-2 bg-white/5 border border-gray-500/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full px-4 py-2 bg-white/5 border border-gray-500/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              onClick={handleSubmit}
              className="w-full px-5 py-2 bg-primary hover:bg-primary-dull transition rounded-full font-semibold text-white shadow-md"
            >
              Sign Up
            </button>
          </div>
          <p className="mt-6 text-center text-sm text-gray-400">
            Already have an account?{' '}
            <Link to="/login" className="text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    );
  };

  export default Signup;
