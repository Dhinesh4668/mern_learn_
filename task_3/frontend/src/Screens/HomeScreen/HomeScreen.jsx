import axios from 'axios';
import React, { useEffect, useState } from 'react';

const HomeScreen = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/user/show');
        setUserData(response.data); 
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='container'>
      <p className='title'>Welcome back {userData.name}!</p>
    </div>
  );
};

export default HomeScreen;
