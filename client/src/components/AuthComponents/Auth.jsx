import React, { useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import FormInputs from "./FormInputs";
import { Button } from "../ui/button";

// * Create an instance of cookies.
const cookies = new Cookies();

const Auth = () => {
  // ! Temporary prop passing from child to parent
  const [data, setData] = useState({});
  const [isSignUp, setIsSignUp] = useState(true);

  const handleFormChange = (form) => {
    setData(form);
  };

  const handleIsSignUp = () => {
    setIsSignUp(!isSignUp);
  };
  // * Handle submit function
  const handleSubmit = async (event) => {
    try {
      // * Prevent default behaviour of reloading the page.
      event.preventDefault();

      // * destructure the form data
      const { fullName, username, password, phoneNumber, avatarFile } = data;

      // * Create thr URL for the post request.
      const URL =
        "https://5000-gavpri-chatapppt-w1a5xpdsocn.ws-eu115.gitpod.io/auth";

      // * Create an instance of formData
      const formData = new FormData();
      formData.append("fullName", fullName);
      formData.append("username", username);
      formData.append("token", token);
      formData.append("userId", userId);

      if (isSignUp) {
        formData.append("phoneNumber", phoneNumber);
        if (avatarFile) {
          formData.append("avatarFile", avatarFile);
        }
      }

      // * In this post request we are sending the form data.
      // * We will also have to destructure the data that is returned to us.
      const {
        data: { token, userId, hashedPassword },
      } = await axios.post(`${URL}/${isSignUp ? "signup" : "login"}`, {
        fullName,
        username,
        password,
        phoneNumber,
        avatarURL,
      });

      // * Adding cookies to sign in and sign up
      cookies.set("token", token);
      cookies.set("username", username);
      cookies.set("fullName", fullName);
      cookies.set("userId", userId);
      // * If it is a sign up form
      if (isSignUp) {
        cookies.set("avatarURL", avatarURL);
        cookies.set("hashedPassword", hashedPassword);
        cookies.set("phoneNumber", phoneNumber);
      }
      // * Reloading the window will refresh the app. AuthToken will now be true, directing the user to the chat app.
      window.location.reload();
    } catch (error) {
      console.error("Axios Error: ", error.message);
    }
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
          <FormInputs isSignUp={isSignUp} onFormChange={handleFormChange} />
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
