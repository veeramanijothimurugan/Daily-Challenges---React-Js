import React, { useEffect, useState } from "react";
import employees from "../assets/Employees";
import { Link, useNavigate } from "react-router-dom";

const Edit = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const histroy = useNavigate();
  var index = employees
    .map(function (e) {
      return e.id;
    })
    .indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault();

    let a = employees[index];
    a.name = name;
    a.position = position;

    histroy("/");
  };

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setPosition(localStorage.getItem("position"));
  }, []);

  return (
    <div className="container mt-5 d-flex">
      <form className="w-50 mx-auto">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={name}
            placeholder="Enter Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={position}
            placeholder="Enter Position"
            onChange={(e) => {
              setPosition(e.target.value);
            }}
          />
        </div>
        <Link to={"/"}>
          <button className="btn btn-primary w-100" onClick={handleSubmit}>
            Update
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Edit;
