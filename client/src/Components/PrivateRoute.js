
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const logedinuser = JSON.parse(localStorage.getItem("user"));
  return logedinuser ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
