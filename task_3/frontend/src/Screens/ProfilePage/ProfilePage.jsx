import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
const ProfilePage = () => {
  // State to store user data
  const [userData, setUserData] = useState(null);
  const storedData = localStorage.getItem('userInfo');
  const data = storedData ? JSON.parse(storedData) : null;

  // Extract  userId from the data
  const userId = data ? data.data.userId : null;
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/profile/${userId}`);
        setUserData(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchUserData();
  }, [userId]);
  return (
    <div>
      {userData && (
        <div className='container align-content-center justify-content-center'>
          <h2>User Details</h2>
          <p>Name: {userData.name} </p>
          <p>Email: {userData.email}</p>
          <p>age: {userData.age}</p>
          <p>gender: {userData.gender}</p>
          <p>dote of borth: {userData.dob}</p>
          <img src={userData.profilePic} style={{
            height: '50%', width: '25%'
          }} alt={userData.name} />
        </div>
      )}


      <div className='container'>
        <p>edit the your profile <Link to={`/edit/${userId}`}>edit </Link></p>
      </div>
    </div>
  );
};

export default ProfilePage;
