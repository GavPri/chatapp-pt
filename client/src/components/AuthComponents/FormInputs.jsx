import { Image } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
// TODO - create intial state for form data.

// * Sign in page links - username, password

// * Intial state of the form.
const formInitialState = {
  fullName: "",
  username: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
  avatarURL: "",
};

const FormInputs = ({ isSignUp }) => {
  //  * Creat state for avatar preview - setting it to null
  const [avatarPreview, setAvatarPreview] = useState(null);

  // * Create form state with initial state above
  const [form, setForm] = useState(formInitialState);

  // * useEffect to check form data
  useEffect(() => {
    console.log(form);
  }, [form]);

  // * Handle user inputs to be prepped for authentication.
  const handleFormInputChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  // * Creating a refernce for the avatar upload input
  const AvatarUploadInput = useRef(null);

  // * Avatar upload button
  const AvatarUploadButton = () => {
    return (
      <>
        {avatarPreview ? (
          <>
            <img
              src={avatarPreview}
              alt="Avatar"
              className="h-32 aspect-square mx-auto rounded-full object-cover cursor-pointer"
              onClick={(event) => {
                event.preventDefault();
                AvatarUploadInput.current.click();
              }}
            />
          </>
        ) : (
          <>
            <button
              onClick={(event) => {
                event.preventDefault();
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
        )}
      </>
    );
  };

  // * Handle Avatar Upload: Show preview to user.
  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // * Create a URL for the file
      const objectURL = URL.createObjectURL(file);

      // * Set the avatar preview to the created URL
      setAvatarPreview(objectURL);

      // * Update the form state with the URL
      setForm((prevForm) => ({
        ...prevForm,
        avatarURL: objectURL, // Store the object URL in avatarURL
      }));
    }
  };

  return (
    //  * Inputs container
    <div className="w-64 h-fit mx-auto">
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
            onChange={handleFormInputChange}
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
        onChange={handleFormInputChange}
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
            onChange={handleFormInputChange}
          />
        </>
      )}
      {isSignUp && (
        <>
          <label htmlFor="avatarURL" className="sr-only">
            Avatar URL
          </label>{" "}
          <input
            ref={AvatarUploadInput}
            onChange={handleAvatarChange}
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
        onChange={handleFormInputChange}
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
            onChange={handleFormInputChange}
          />
        </>
      )}
      {isSignUp && <AvatarUploadButton />}
    </div>
  );
};

export default FormInputs;
