/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { loadbg } from '../assets';

const LoadingScreen = ({ progress }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
    <img
      src={loadbg} 
      alt="Loading"
      className="absolute inset-0 object-cover w-full h-full"
    />
    <div className="relative">
        <div className="w-16 h-16 border-t-2 border-b-2 rounded-full animate-spin border-primary"></div>
        <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-primary">
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
