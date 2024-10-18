import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import employees from "../assets/Employees";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const histroy = useNavigate();

  const handleDelete = (id) => {
    var index = employees
      .map(function (e) {
        return e.id;
      })
      .indexOf(id);
      console.log(index);

    employees.splice(index, 1);
    histroy("/");
  };

  const handleEdit = (id,name,position)=>{
    localStorage.setItem('id',id);
    localStorage.setItem('name',name);
    localStorage.setItem('position',position);
    histroy("/update");
  }
  return (
    <div className="container mt-5">
      {employees.length > 0 ? (
        <table className="table table-striped table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Position</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.position}</td>
                <td>
                  <button className="btn btn-primary me-2" onClick={()=>{handleEdit(employee.id,employee.name,employee.position)}}>Edit</button>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      handleDelete(employee.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available.</p>
      )}
      <Link to={"/add"}>
        <button className="btn btn-success w-100">Add</button>
      </Link>
    </div>
  );
};

export default Home;
