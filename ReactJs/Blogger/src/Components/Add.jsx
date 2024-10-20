import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
  const [img, setImg] = useState("");
  const history = useNavigate();
  let date = new Date();
  const [blog, setBlogs] = useState({
    title: "",
    author: "",
    date: date.toLocaleDateString(),
    description: "",
    content: "",
    image: "",
  });

  const handleChage = (e) =>{
    setBlogs({...blog,[e.target.name]:e.target.value});
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
        const response = await fetch("http://localhost:5000/blogs",{
            method: "POST",
            headers: {
                "content-Type":"application/json"
            },
            body: JSON.stringify(blog)
        });
    }
    catch(err){
        console.error("Failed to add blog.");
    }
    history("/");
    // {
    //     "id": 6,
    //     "title": "Mastering Git for Version Control",
    //     "author": "Alice Cooper",
    //     "date": "2024-10-22",
    //     "description": "Git is an essential tool for version control in software development, enabling collaboration and efficient project management.",
    //     "content": "Git is a distributed version control system that allows multiple developers to collaborate on a project efficiently. In this post, we'll cover the basics of Git, from initializing repositories to managing branches and resolving merge conflicts.",
    //     "image": "https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png"
    //   }
  };
  return (
    <div className="container mt-5 mb-5 w-50">
      <div className="card p-4 shadow-lg border-0">
        <h3 className="text-center fw-bold">Add Blog</h3>
        <form className="">
          <div className="row mt-2">
            <div className="col-lg-6 mt-2">
              <input
                name="title"
                type="text"
                className="form-control"
                placeholder="Title"
                required
                onChange={(e)=>{handleChage(e)}}
              />
            </div>
            <div className="col-lg-6 mt-2">
              <input
                name="author"
                type="text"
                className="form-control"
                placeholder="Author"
                required
                onChange={(e)=>{handleChage(e)}}
              />
            </div>
          </div>
          <div className="mt-3">
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Description"
              required
              onChange={(e)=>{handleChage(e)}}
            />
          </div>
          <div className="mt-3">
            <input
              name="image"
              type="text"
              placeholder="Image url"
              className="form-control"
              required
              onChange={(e)=>{handleChage(e);setImg(e.target.value)}}
            />
          </div>
          {img && (
            <div className="mt-3">
              <p className="text-center fw-bold">Preview</p>
              <img
                className="rounded-3"
                src={img}
                alt=""
                width="100%"
                height="300px"
              />
            </div>
          )}
          <div className="mt-3">
            <textarea
              name="content"
              type="text"
              placeholder="Content"
              className="form-control"
              onChange={(e)=>{handleChage(e)}}
              required
            />
          </div>

          <button className="btn btn-success mt-4 w-100" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
