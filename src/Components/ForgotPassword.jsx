import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const location = useLocation();

  useEffect(() => {
    // Get the email passed from the login page (if provided)
    if (location.state && location.state.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  // Handle password reset (simulate Gmail redirect)
  const handleResetPassword = (e) => {
    e.preventDefault();
    if (email) {
      const resetLink = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${email}&su=Password%20Reset%20Request&body=Please%20reset%20your%20password.`;
      window.location.href = resetLink;
    } else {
      setMessage('Please enter a valid email address.');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Reset Password</h2>

        {message && <p className="text-red-500 text-center">{message}</p>}

        <form onSubmit={handleResetPassword}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white py-3 rounded-full hover:scale-105 transform transition-all duration-300 ease-in-out"
          >
            Reset Password
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm">
            Remember your password? <a href="/login" className="text-blue-600 hover:underline">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
