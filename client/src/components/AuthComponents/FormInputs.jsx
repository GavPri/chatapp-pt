import { Image } from "lucide-react";
import React, { useRef, useState } from "react";
// TODO - create state to handle preview of avatar - avatar preview.

// * Sign in page links - username, password

const FormInputs = ({ handleIsSignUp, isSignUp }) => {
    const [avatarPreview, setAvatarPreview] = useState(false)
  // * Creating a refernce for the avatar upload input
  const AvatarUploadInput = useRef(null);

  // * Avatar upload button
  const AvatarUploadButton = () => {
    return (
      <>
        <button
          onClick={() => {
            AvatarUploadInput.current.click();
          }}
          className="flex justify-between items-center w-full bg-gradient-to-tr from-violet-500 to-violet-700 text-slate-50 py-4 px-6 rounded-md"
        >
          Choose your Avatar!{" "}
          <span>
            {" "}
            <Image />{" "}
          </span>
        </button>
      </>
    );
  };

  // * Handle Avatar Upload: Show preview to user
  const handleAvatarChange = (event) => {
    const file = event.target.file[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {

        }
    }
    
  };

  return (
    //  * Inputs container
    <div className="w-64 h-fit mx-auto">
      {/* Input for full name, rendered conditionally */}
      {isSignUp && (
        <>
          <label htmlFor="fullName" className="sr-only">
            Full Name
          </label>{" "}
          <input
            type="text"
            placeholder="Full Name"
            name="fullName"
            className="w-full rounded-md drop-shadow-sm my-4 py-4 px-4"
          />
        </>
      )}
      <label htmlFor="username" className="sr-only">
        Full Name
      </label>{" "}
      <input
        type="text"
        placeholder="Username"
        name="username"
        className="w-full rounded-md drop-shadow-sm my-4 py-4 px-4"
      />
      {isSignUp && (
        <>
          <label htmlFor="phoneNumber" className="sr-only">
            Phone Number
          </label>{" "}
          <input
            type="text"
            placeholder="Phone Number"
            name="phoneNumber"
            className="w-full rounded-md drop-shadow-sm my-4 py-4 px-4"
          />
        </>
      )}
      {/* TODO change from default file input */}
      {isSignUp && (
        <>
          <label htmlFor="avatarURL" className="sr-only">
            Avatar URL
          </label>{" "}
          <input
            ref={AvatarUploadInput}
            type="file"
            accept="image/png, image/jpeg"
            placeholder="Avatar"
            name="avatarURL"
            className="hidden"
          />
        </>
      )}
      <label htmlFor="password" className="sr-only">
        Password
      </label>
      <input
        type="password"
        name="password"
        className="w-full rounded-md drop-shadow-sm my-4 py-4 px-4"
        placeholder="Password"
      />
      {isSignUp && (
        <>
          <label htmlFor="confirmPassword" className="sr-only">
            Confirm Password
          </label>{" "}
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            className="w-full rounded-md drop-shadow-sm my-4 py-4 px-4"
          />
        </>
      )}
      {isSignUp && <AvatarUploadButton />}
    </div>
  );
};

export default FormInputs;
