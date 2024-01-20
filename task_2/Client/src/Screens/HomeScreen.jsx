import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import moment from "moment";
import { auth } from "../firebase.confg";
const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/get");
        setData(response.data);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchData();

    const unsubscribe = auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        setUser(authuser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/delete/${id}`);
      setData((prevData) => prevData.filter((item) => item._id !== id));
      toast.success(`id - ${id} was deleted`);
    } catch (error) {
      console.error(`Error deleting item with ID ${id}: ${error.message}`);
      toast.error(`Error deleting item with ID: ${id}`);
    }
  };

  return (
    <>
      {/* top name bar */}
      {user ? (
        <div className="container rounded mt-5  bg-success-subtle ustify-content-between d-flex flex-row text-black border-black p-3">
          <h3 className="container align-content-center ">CRUD - mern </h3>
          <h4 className="text-capitalize">
            Welcome back 🐧, {user.displayName}
          </h4>
          <img
            src={user.photoURL}
            className="rounded-circle"
            style={{ width: 50 }}
            alt="user image"
          />
        </div>
      ) : (
        <div className="container rounded mt-5  bg-success-subtle ustify-content-between d-flex flex-row text-black border-black p-3">
          <h3 className="container align-content-center ">CRUD - mern </h3>
          <h4 className="text-capitalize">
            Welcome back 🐧, Dhinesh
          </h4>
        </div>
      )}

      <div className="container mt-5">
        {/* Create Button */}
        <Link type="button" className="btn btn-primary mb-3" to="/create">
          Create
        </Link>

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
          <tbody className="text-center">
            {data.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.age}</td>
                <td>{item.mobile}</td>
                <td>{moment(item.createdAt).format("YYYY-MM-DD HH:mm:ss")}</td>
                <td>
                  <NavLink
                    className="btn btn-warning btn-sm me-2"
                    to={`/update/${item._id}`}
                  >
                    Update
                  </NavLink>
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
