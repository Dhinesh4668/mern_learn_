import axios from 'axios'
import React,{useState} from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
const CreateScreen = () => {
  const [name, setName] = useState()
  const [age, setAge] = useState()
  const [email, setEmail] = useState()
  const [mobile, setMobile] = useState()
const navigate = useNavigate()
  // handle submit
  const handleSubmit =async (e)=>{
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/create',{name, age, email, mobile});
      console.log('Task created. Task ID:', response.data.id);
      navigate('/home')
      toast.success(`${response.data.name} was add the database`)
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Error creating item dublicate value');
      }
    }
  }
  return (
    <div className='container'>
      <div className='container p-2 m-2 rounded text-black'>
        <h1>CREATE</h1>
      </div>
      {/* create form */}

      <div className='container bg-secondary mt-3 p-5 rounded-4 text-white'>
        <form action="" className='from-group' onSubmit={handleSubmit}>

          <label>Name</label>
          <input type="text" required placeholder='Name' className='form-control' value={name} onChange={(e)=> setName(e.target.value)}/>
          <br/>
          <label>Age</label>
          <input  type='number' required placeholder='age' className='form-control' value={age} onChange={(e)=> setAge(e.target.value)}/>
          <br/>
          <label>email</label>
          <input type="email" required placeholder='sample@mail.com' className='form-control' value={email} onChange={(e)=> setEmail(e.target.value)} />
          <br />
          <lable>Mobile</lable>
          <input type="number" required placeholder='mobilenumber' className='form-control' value={mobile} onChange={(e)=> setMobile(e.target.value)} />
          <br />
          <button className='btn btn-success' type='submit'>Create</button>
        </form>
      </div>
    </div>
  )
}

export default CreateScreen