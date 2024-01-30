import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProfilePage = () => {
  // State to store user data
  const [userData, setUserData] = useState(null);
  const storedData = localStorage.getItem('userInfo');
  const data = storedData ? JSON.parse(storedData) : null;

  const navigate = useNavigate();
  // Extract userId from the data
  const userId = data ? data.data.userId : null;
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/profile/${userId}`);
        setUserData(response.data);
        // setImage(respon.data[0].image)
        // console.log(respons)2
        console.log(response.data[0])
        toast.success(response.message)
      } catch (error) {
        console.error(error.message);
      }
    };
    
    fetchUserData();
  }, [userId]);

  return (
    <div className='container bg-body-secondary p-3 rounded mt-5'>
      {userData && (
        <div className='container align-content-center justify-content-center'>
          <h2>User Details</h2>
          <p>Name: {userData.name} </p>
          <p>Email: {userData.email}</p>
          <p>age: {userData.age}</p>
          <p>gender: {userData.gender}</p>
          <p>date of birth: {userData.dob}</p>
          <img src={`http://localhost:8080/Images/${userData.profilePic}`}  className="rounded-circle" style={{  width: '25%' }} alt={userData.name} />
        </div>
      )}

      <div className='container'>
        <p>edit your profile <Link to={`/edit/${userId}`}>edit </Link></p>
      </div>

      {/* logout */}
      {userData ? (
        <button className='btn btn-success' onClick={() => {
          localStorage.removeItem('userInfo');
          navigate('/login');
        }}>Log out</button>
      ) : (
        <button className='btn btn-success' onClick={() => {
          navigate('/login');
        }}>Login</button>
      )}
    </div>
  );
};

export default ProfilePage;
