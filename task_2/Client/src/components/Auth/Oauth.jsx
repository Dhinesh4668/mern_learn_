import React, { useEffect, useState } from "react";
import { auth, provider } from "../../firebase.confg";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import GoogleButton from "react-google-button";

const GoogleAuth = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  // 
  const handleClick = () => {

    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("name", data.user.displayName);
      localStorage.setItem("avathor", data.user.photoURL)
      toast.success(`${data.user.displayName} login sucessfully`);
    });
  };
  useEffect(() => {
    setValue(localStorage.getItem("name"));
  });
  
  return (
    <>
      {value ? (
        navigate("/home")
      ) : (
        <div className="justify-content-center">
          <GoogleButton className="rounded-1" onClick={handleClick} >
            Login With Google
          </GoogleButton>
        </div>
      )}
    </>
  );
};

export default GoogleAuth;