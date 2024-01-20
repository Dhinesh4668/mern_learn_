import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateScreen = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/get/${id}`);
        const { name, age, email, mobile } = response.data;
        setName(name || '');
        setAge(age || '');
        setEmail(email || '');
        setMobile(mobile || '');
      } catch (error) {
        toast.error('Error fetching data for update');
      }
    };
    fetchData();
  }, [id]);

  // handle update
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8080/api/update/${id}`, {
        name,
        age,
        email,
        mobile,
      });

      console.log('Task updated. Task ID:', response.data._id);
      navigate('/home');
      toast.success('Task updated successfully');
    } catch (error) {
      console.error(error.message);
      toast.error('Error updating task');
    }
  };

  return (
    <div className='container'>
      <div className='container p-2 m-2 rounded text-black'>
        <h1>UPDATE</h1>
      </div>
      {/* update form */}
      <div className='container bg-secondary mt-3 p-5 rounded-4 text-white'>
        <form className='form-group' onSubmit={handleUpdate}>
          <label>Name</label>
          <input
            type='text'
            placeholder='Name'
            value={name}
            className='form-control'
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label>Age</label>
          <input
            type='number'
            placeholder='Age'
            className='form-control'
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <br />
          <label>Email</label>
          <input
            type='email'
            placeholder='sample@mail.com'
            className='form-control'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label>Mobile</label>
          <input
            type='number'
            placeholder='Mobile Number'
            className='form-control'
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <br />
          <button className='btn btn-success' type='submit'>
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateScreen;
