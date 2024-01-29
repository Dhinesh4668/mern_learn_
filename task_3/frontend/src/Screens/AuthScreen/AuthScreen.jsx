import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AuthScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (userInfo) {
      navigate("/");
    }
  }, [navigate]);

  const login = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:8080/api/user/login",
        { email, password },
        config
      );

      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate('/');
      toast.success("Login successful");
    } catch (err) {
      if (err.response) {
        if (err.response.status === 401) {
          toast.error("Email or password is incorrect");
        } else {
          toast.error(err.response.data.message || "Enter valid email and password");
        }
      } else if (err.request) {
        toast.error("No response received from the server");
      } else {
        toast.error("An unexpected error occurred");
        console.error(err.message);
      }
    }
  };

  return (
    <div className="container flex-column">
      <div className="m-5 p-5 align-items-center">
        <form className="form-group" onSubmit={login}>
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
          <label className="form-label">Password</label>
          <input
            className="form-control"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          <br />
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>

      <div>
        <p className="text-body">
          You don't have an account?
          <Link to="/regester" className="btn btn-link">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default AuthScreen;
