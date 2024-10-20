import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons'
import '../App.css'
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:5000/blogs");
        if (!response.ok) throw new Error("Network is not responding");
        const data = await response.json();
        const sortedBlogs = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setBlogs(sortedBlogs);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <div>Loading please wait..</div>;
  if (blogs.length == 0) return <div>Loading please wait..</div>;

  return (
    <>
      <div className="container mt-5 mb-5">
        <h1 className="text-center fw-bold">TechBlogger</h1>
        <div>
        <form className="searchbar">
            <div className="input-group mt-4 mb-5 w-50 mx-auto">
                <input 
                    className="form-control rounded-pill border-2 border-dark pe-5" 
                    placeholder="Search" 
                    type="text" 
                    aria-label="Search"
                />
                <span className="input-group-text border-0 bg-transparent position-absolute" style={{ right: '5px', top: '50%', transform: 'translateY(-50%)',cursor:"pointer",zIndex:"1" }}>
                    <FontAwesomeIcon icon={faSearch} />
                </span>
            </div>
        </form>
        </div>
        <div className="row justify-content-center">
          {blogs.map((data, index) => (
            <div
              key={index}
              className="card border-0 m-4 px-0 col-lg-4"
              style={{ cursor: "pointer" }}
            >
              <img src={data.image} />
              <div className="d-flex mt-2 text-muted">
                <p className="me-2">{data.author} | </p>
                <p>{data.date}</p>
              </div>
              <h3 >{data.title}</h3>
              <p className="text-muted">{data.description}</p>
            </div>
          ))}
        </div>
        <Link to={"/add"}>
            <button className="btn mx-auto d-block add-btn"><FontAwesomeIcon className="icon" icon={faAdd}/></button>
        </Link>
      </div>
    </>
  );
};

export default Home;
