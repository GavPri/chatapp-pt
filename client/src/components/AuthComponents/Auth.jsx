import React, { useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import FormInputs from "./FormInputs";
import { Button } from "../ui/button";

const Auth = () => {
  // ! Temporary prop passing from child to parent - DELETE LATER
  // const [data, setData] = useState(null)
  const [isSignUp, setIsSignUp] = useState(true);

  //  Call back function to access the child prop in the parent
  // const handleData = (form) => {
  //   setData(form)
  // }

  const handleIsSignUp = () => {
    setIsSignUp(!isSignUp);
  };
  // * Handle submit function
  const handleSubmit = (event) => {
    // ? Prevent default behaviour of reloading the page.
    event.preventDefault();
    // * data passed from child form to parent
    // console.log(data)
  };

  return (
    <div className="h-screen w-screen bg-slate-100 flex justify-center items-center">
      {/* Form Container */}
      <div className="h-full w-full bg-slate-200 border-2 border-violet-300 rounded-md drop-shadow-md shadow-violet-400">
        {/* Form Header */}
        <h1 className="text-3xl text-violet-500 text-center mt-4">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h1>
        <form className="w-full" onSubmit={handleSubmit}>
          <FormInputs isSignUp={isSignUp} />
          <div className="w-full flex justify-center items-center my-4 ">
            <Button className="bg-gradient-to-tr from-violet-400 to-violet-700 py-4 w-8/12 md:w-1/5 px-6">
              {isSignUp ? "Sign Up" : "Sign In"}
            </Button>
          </div>
        </form>
        {/* Change form button */}
        <p className="text-center">
          {isSignUp ? "Already got an account?" : "Don't have an account?"}
          <br />
          <span
            onClick={handleIsSignUp}
            className="hover:cursor-pointer text-violet-400 hover:text-violet-500"
          >
            {isSignUp ? "Sign In" : "SignUp"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Auth;
