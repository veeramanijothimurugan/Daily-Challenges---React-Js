import React, { useState } from 'react'
import employees from '../assets/Employees'
import { v4 as uuid } from 'uuid';
import { Link,useNavigate } from 'react-router-dom';


const Add = () => {
  const [name,setName]=useState("");
  const [position,setPosition]=useState("");
  const histroy = useNavigate();
   
  const handleSubmit = (e)=>{
    e.preventDefault();
    const ids=uuid();
    let uniqueId=ids.slice(0,8);
    let a=name;
    let b=position;
    employees.push({id:uniqueId,name:a,position:b});

    histroy('/');
  }
  

  return (
    <div className='container mt-5 d-flex'>
      <form className='w-50 mx-auto'>
        <div className='mb-3'>
            <input type="text" className='form-control' placeholder='Enter Name' onChange={(e)=>{setName(e.target.value)}}/>
        </div>
        <div className='mb-3'>
            <input type="text" className='form-control' placeholder='Enter Position' onChange={(e)=>{setPosition(e.target.value)}}/>
        </div>
        <Link to={'/'}><button className='btn btn-primary w-100' onClick={handleSubmit}>Add</button></Link>
      </form>
    </div>
  )
}

export default Add
