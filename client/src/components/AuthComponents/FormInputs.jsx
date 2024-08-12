import React from "react";
// TODO - Auth inputs - fullname, username, phonenumber, profile picture, password, confirm password

// * Sign in page links - username, password

const FormInputs = ({ handleIsSignUp, isSignUp }) => {
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
            type="file"
            accept="image/png, image/jpeg"
            placeholder="Avatar"
            name="avatarURL"
            className="w-full rounded-md drop-shadow-sm my-4 py-4 px-4"
          />
        </>
      )}
    </div>
  );
};

export default FormInputs;
