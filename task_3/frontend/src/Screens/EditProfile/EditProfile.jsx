import React, { useState, useEffect } from "react";
import axios from 'axios';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const [name, setName] = useState("");
  const [userId, setUserId] = useState('');
  const [age, setAge] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [email, setEmail] = useState('');
  const [previewImageUrl, setPreviewImageUrl] = useState('');

  useEffect(() => {
    const storedData = localStorage.getItem('userInfo');
    const data = storedData ? JSON.parse(storedData) : null;
    const userIdFromData = data ? data.data.userId : null;
    setUserId(userIdFromData);
  }, []);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name)
    console.log(age)
    console.log(email)
    console.log(profilePic)
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('age', age);
      formData.append('email', email);
      formData.append('profilePic', profilePic);

      const response = await axios.patch(`http://localhost:8080/api/update/${userId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const exestingInfo = await axios.get(`http://localhost:8080/api/profile/${userId}`,formData, {
        headers: {
          "content-type": "multiport/from-data"
        }
      })
      setName(exestingInfo.name || '')
      setAge(exestingInfo.age || '')
      setEmail(exestingInfo.email || '')

      console.log(response.data);
      toast.success("Update successful");
      navigate('/');
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error(error.message);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfilePic(file);

    const imageUrl = URL.createObjectURL(file);
    setPreviewImageUrl(imageUrl);
  };

  return (
    <div className="container">
      <h2>EditProfile</h2>

      <form onSubmit={handleSubmit} className="container bg-body-secondary p-3 rounded">
        <h6>Name</h6>
        <input
          type="text"
          className="form-control"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <h6>Age</h6>
        <input 
          type="text"
          className="form-control"
          placeholder="Enter age"
          value={age}
          onChange={e => setAge(e.target.value)}
        />
        <h6>Email</h6>
        <input 
          type="email" 
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <h6>Profile Pic</h6>
        <input 
          type="file"
          className="form-control"
          onChange={handleFileChange} 
        />
        <button type="submit" className="btn btn-primary mt-2">
          Update Profile
        </button>
      </form>

      <div className="container">
        <h1>Preview</h1>
        <h6>Name: {name}</h6>
        <h6>Age: {age}</h6>
        <h6>Email: {email}</h6>
        {previewImageUrl && <img src={previewImageUrl} alt="Preview" style={{ height: '100%', width: '100%' }} />}
      </div>
    </div>
  );
};

export default EditProfile;
