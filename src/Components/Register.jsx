import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { FaGoogle } from 'react-icons/fa'; 
import { createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../Firebase/firebase-config'; // Correct path to firebase-config
import { motion } from 'framer-motion'; // Import Framer Motion
import { ToastContainer, toast } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the passwords match
    if (password !== confirmPassword) {
      toast.error('Passwords do not match!'); // Error toast
      return;
    }

    // Password validation: Uppercase, lowercase, and length >= 6
    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || password.length < 6) {
      toast.error('Password must contain an uppercase letter, a lowercase letter, and be at least 6 characters long.'); // Error toast
      return;
    }

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Update user profile with name and photo URL
      await updateProfile(userCredential.user, {
        displayName: name,
        photoURL: photoURL,
      });

      toast.success('Registration successful!'); // Success toast
      navigate('/profile'); // Redirect to profile page after successful registration
    } catch (err) {
      toast.error('Failed to register'); // Error toast
      console.error(err);
    }
  };

  // Google Sign-Up functionality
  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast.success('Google sign-up successful!'); // Success toast
      navigate('/profile'); // Redirect to profile page after successful login
    } catch (err) {
      toast.error('Google sign-up failed'); // Error toast
      console.error(err);
    }
  };

  return (
    <motion.div
      className="min-h-screen flex justify-center items-center bg-gray-100 mt-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
      >
        <motion.h2
          className="text-2xl font-bold text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Create Your Account
        </motion.h2>

        <form onSubmit={handleSubmit}>
          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </motion.div>

          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </motion.div>

          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700">Profile Picture URL</label>
            <input
              type="url"
              id="photoURL"
              name="photoURL"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
            />
          </motion.div>

          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                type={passwordVisible ? 'text' : 'password'}
                id="password"
                name="password"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
              </button>
            </div>
          </motion.div>

          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white py-3 rounded-full hover:scale-105 transform transition-all duration-300 ease-in-out"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            Sign Up
          </motion.button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-4 text-sm text-gray-600">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <motion.button
          onClick={handleGoogleSignUp}
          className="w-full bg-red-500 text-white py-3 rounded-full flex items-center justify-center gap-2 hover:scale-105 transform transition-all duration-300 ease-in-out"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <FaGoogle />
          <span>Continue with Google</span>
        </motion.button>

        <div className="mt-4 text-center">
          <p className="text-sm">
            Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Log In</Link>
          </p>
        </div>
      </motion.div>

      {/* Toast container */}
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </motion.div>
  );
};

export default Register;
