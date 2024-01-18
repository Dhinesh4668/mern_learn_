import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify'


const HomeScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/get")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  const handleUpdate = async (id) =>{
    useNavigate(`/update/${id}`)
  }

  const handleDelete = async (id, name) => {
    try {
      await axios.delete(`http://localhost:8080/api/delete/${id}`);
      setData(data.filter(item => item.id !== id));
      console.log(`Successfully deleted item with ID: ${id}`);
      toast.success(`${name} was deleted`);
    } catch (error) {
      console.error(`Error deleting item with ID ${id}: ${error.message}`);
      toast.error(`Error deleting item with ID: ${id}`);
    }
  };

  return (
    <>
      {/* top name bar */}
      <div className="container-fluid bg-dark text-light p-2">
        <h3>CRUD - mern </h3>
      </div>

      <div className='container mt-5'>
        {/* Create Button */}
        <Link type='button' className='btn btn-primary mb-3' to="/create">Create</Link>

        {/* Items Table */}
        <table className="table  center table-bordered rounded table-striped">
          <thead className="text-center">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>age</th>
              <th>mobile</th>
              <th>created time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="">
            {data.map(item => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.age}</td>
                <td>{item.mobile}</td>
                <td>{item.createdAt}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => handleUpdate(item._id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    </>
  );
};

export default HomeScreen;
