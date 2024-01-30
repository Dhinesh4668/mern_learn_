import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom'
const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [interest, setInterest] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pic, setPic] = useState("");
  const [confromPassword, setConformPassword] = useState();
  const [dob, setDob] = useState();

  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confromPassword) {
      toast.info("Password Do Not Match");
    } else {
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };

        const data  = await axios.post(
          "http://localhost:8080/api/user/register",
          { email, password, pic, interest, gender, age, name, dob },
          config
        );
        console.log(data)
        toast.success("regestration Sucess")
        navigate("/login")
      } catch (err) {
        toast.info(err.message);
        console.error(err.message);
      }
    }
  };
  return (
    <div className="container  p-5">
      <h2 className="modal-title text-small">Registration</h2>
      {/* form */}
      <form
        className="form-group p-5 rounded-3 bg-body-secondary container"
        onSubmit={handleSubmit}
      >
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Name"
        />

        <label className="form-label">Age</label>
        <input
          type="number"
          className="form-control"
          required
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
        />
        <lable>Date of Birth</lable>
        <input
          type="date"
          className="form-control"
          placeholder="date of birth"
          id=""
          required
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <label className="form-label">Gender</label>
        <input
          type="text"
          className="form-control"
          required
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          placeholder="Gender"
        />
        <lable className="form-label">ProfilePic</lable>
        <input
          type="file"
          className="form-control"
          placeholder="chooses avathor pic"
          value={pic}
          onChange={(e) => setPic(e.target.value)}
        />
        <label htmlFor="yes" className="form-label">
          Interest
        </label>
        <div className="form-control">
          <input
            type="checkbox"
            className="form-check-input"
            name="interest"
            id="yes"
            checked={interest}
            onChange={() => setInterest(!interest)}
          />
          <label htmlFor="yes">Yes</label>
          <br />
          <input
            type="checkbox"
            name="interest"
            className="form-check-input"
            id="no"
            checked={!interest}
            onChange={() => setInterest(!interest)}
          />
          <label htmlFor="no">No</label>
        </div>

        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email"
        />

        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Password"
        />
        <label className="form-label">Confrom Password</label>
        <input
          type="password"
          className="form-control"
          value={confromPassword}
          onChange={(e) => setConformPassword(e.target.value)}
          required
          placeholder="Password"
        />
        <br />
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};
export default RegisterScreen;
