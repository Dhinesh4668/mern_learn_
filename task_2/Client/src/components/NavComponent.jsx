import React from "react";
import { Link } from 'react-router-dom';
import Oauth from './Auth/Oauth'
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";
const Slider = () => {
  const isLoggedIn = localStorage.getItem('email'); 
  const navigate = useNavigate()
  return (
      <div className="d-flex flex-row justify-content-around mb-4  p-3 text-white bg-secondary">
        {isLoggedIn ? (
          <>
            <div>
              <Link className="nav-link font-weight-bold" to="/home"> Home</Link>
            </div>
            <div>
              <Link  className="nav-link font-weight-bold" to="/create">Create Task</Link>
            </div>
            <div>
              <button className="btn btn-danger font-weight-bold" onClick={() => {
                localStorage.clear();
                navigate('/');
                toast.success(`${isLoggedIn} Logout successfully`);
              }}>Logout</button>
            </div>
          </>
        ) : (
          <div className="nav-item">
            <Oauth />
          </div>
        )}
    </div>
  );
};

export default Slider;