import React from 'react';
import { Navigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { auth } from '../Firebase/firebase-config'; // Ensure the path is correct

const ProtectedRoute = ({ children }) => {
  const currentUser = getAuth(auth).currentUser; // Check if the user is authenticated
  
  if (!currentUser) {
    return <Navigate to="/login" replace />; // Redirect to login if not authenticated
  }

  return children; // Render the children components if authenticated
};

export default ProtectedRoute;
a