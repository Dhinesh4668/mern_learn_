import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
const EditProfile = () => {
  const {id} = useParams()
  const[name, setName] = useState('');
  const[age, useAge]= useState('');
  const[dob, setDob]=useState()
  const[gender, setGender]=useState('');
  const[pic, setPic]=useState()
  const navigate = useNavigate()


  const handleSubmit = async (e) =>{
    e.preventDefault()
    try{
      const update = await axios.patch(`http://localhost:8080/api/user/${id}`, {
        name,
        age,
        dob, 
        gender,
        pic
      });
      console.log("data was update ")
      navigate('/');
      toast.success("update was sucess")
    }catch(err){
      console.error(err.message)
      toast.error(err.message)
    }
  }
  return (
    <div className='container'>
      <p className='offcanvas-title'>edit user profile</p>
      {/* edit container */}
      <form className='form-group container container-fluid bg-body-secondary p-3 rounded' onSubmit={handleSubmit}>

        {/* name */}
        <label className='form-lable'>Name</label>
        <input type='text' className='form-control' value={name} onChange={e=>setName(e.target.value)} placeholder='name' />
        {/* age */}
        <label className='form-lable'>Age</label>
        <input type='number' className='form-control' value={age} onChange={e=> e.target.value} placeholder='age' />
        {/* date of birth */}
        <label className='form-lable'>Date of Birth</label>
        <input type='date' className='form-control' value={dob}  onChange={e=>setDob(e.target.value)} placeholder='date of birth' />
        {/* gender */}
        <label className='form-lable'>Gender</label>
        <input type='text' className='form-control' value={gender} onChange={e=> setGender(e.target.value)} placeholder='gender' />
        {/* profile pic */}
        <label className='form-lable'>Profile Pic</label>
        <input type='file' className='form-control' value={pic} onChange={e=> setPic(e.target.value)} placeholder='Profile pic' />

        <br></br>
        <input type='submit' className='btn btn-success w-100' placeholder='Update'/>
      </form>
    </div>
  )
}

export default EditProfile