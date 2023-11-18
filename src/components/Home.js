import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SIgn_img from './SIgn_img'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        date: "",
        password: ""
    })

    const [data,setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);


        const { value, name } = e.target;
        // console.log(value,name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();
    
        const { name, email, date, password } = inpval;
    
        if (name === "") {
          toast.error(' Name field is required!', {
            position: "top-center",
          });
        } else if (email === "") {
          toast.error('Email field is required', {
            position: "top-center",
          });
        } else if (!email.includes("@")) {
          toast.error('Please enter a valid email address', {
            position: "top-center",
          });
        } else if (date === "") {
          toast.error('Date field is required', {
            position: "top-center",
          });
        } else if (password === "") {
          toast.error('Password field is required', {
            position: "top-center",
          });
        } else if (password.length < 3) {
          toast.error('Password length should be greater than three', {
            position: "top-center",
          });
        } else {
          // Retrieve existing data from local storage
          const existingData = localStorage.getItem("useryoutube");
          const existingDataArray = existingData ? JSON.parse(existingData) : [];
    
          // Add new entry to the array
          const newDataArray = [...existingDataArray, inpval];
    
          // Update local storage with the new array
          localStorage.setItem("useryoutube", JSON.stringify(newDataArray));
    
          console.log("Data added successfully");
          history("/login");
        }
      }
    return (
        <>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign Up</h3>
                        <Form >
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control onChange={getdata} name='date' type="date" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3 p-1' >Already Have an Account <span><NavLink to="/login">SignIn</NavLink></span> </p>
                    </div>
                    <SIgn_img />
                </section>
                <ToastContainer />
            </div>
        </>
    )
}

export default Home