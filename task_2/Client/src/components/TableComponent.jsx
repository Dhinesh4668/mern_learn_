import axios from "axios";
import React, { useEffect } from "react";
import {toast} from 'react-toastify'


const TableComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/get")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/delete/${id}`);
      setData(data.filter(item => item.id !== id));
      console.log(`Successfully deleted item with ID: ${id}`);
      toast.success(`${id} was deleted`);

    } catch (error) {
      console.error(`Error deleting item with ID ${id}: ${error.message}`);
      toast.error(`Error deleting item with ID: ${id}`);
    }
  };


  return (
      <table className="table  center table-bordered rounded table-striped">
        <thead className="text-center">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>age</th>
            <th>mobile</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="">
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.age}</td>
              <td>{item.mobile}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEdit(item._id)}
                >
                  Edit
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
  );
};

export default TableComponent;
