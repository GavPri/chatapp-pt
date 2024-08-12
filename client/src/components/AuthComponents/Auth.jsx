import React, { useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleIsSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  const SignUpInputs = () => {
    return (
      <>
        <label htmlFor="Age">Age</label>
        <input type="text" placeholder="Age" />
      </>
    );
  };

  return (
    <div className="h-screen w-screen bg-slate-100 flex justify-center items-center">
      {/* Form Container */}
      <div className="w-3/4 h-3/4 bg-slate-200 border-2 border-violet-300 rounded-md drop-shadow-md shadow-violet-400">
        {/* Form Header */}
        <h1 className="text-3xl text-violet-500 text-center mt-4">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h1>
        <form>
          {isSignUp && <SignUpInputs />}
          <label htmlFor="name"></label>
          <input type="text" placeholder="Name" />
        </form>
        {/* Change form button */}
        <p className="text-center">
          Already got an account?{" "}
          <span
            onClick={handleIsSignUp}
            className="hover:cursor-pointer text-violet-400 hover:text-violet-500"
          >
            Click here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Auth;
