import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

const Login = () => {
    const [values, setValues] = useState({
        email: "",
        password: ""     })
    
    
        const navigate = useNavigate()  
    useEffect(()=>{
        let token = localStorage.getItem("token");

        if (token) navigate ("/");
    }, []);

    async function handleSubmit(e) {
        e.preventDefault()
        console.log("Submitted")

        try{

            let res = await axios.post("https://reqres.in/api/login",  values);
    
            if(res.status===200){
                toast("Login succes", {type: "success"})
                setValues ({email:"", password:""})
                localStorage.setItem("token", res.data.token );
                navigate('/')
            };
        }

        catch(error){
            toast(error.response.data.error, {type: "error"});
        }

    }

    function handleChange(e){
        setValues((oldValues)=> {
            return{
                ...oldValues,
                [e.target.name]: e.target.value,
            }
        } )
    }


    return (
        <div className='min-vh-100 text-bg-light  d-flex align-items-center justify-content-center' >
            <form onSubmit={handleSubmit} className="bg-white border w-50  p-3" >
                <h1 className='display-1 text-center'>Login</h1>
                <div className='my-3'>
                    <label htmlFor="email" className='form-label'> Email </label>
                    <input className='form-control' type="email" name="email" id="email" placeholder="Put your email" value={values.email} onChange={handleChange} required/> 
                    
                </div>
                <div className='my-3'>
                    <label htmlFor="password" className='form-label'> Password </label>
                    <input className='form-control' type="password" name="password" id="password" placeholder="Put your password" value={values.password}  onChange={handleChange} required min={4}/> 
                    
                </div>
                <button className="btn btn-primary d-block w-100 fs-4" disabled={!values.email ||values.password.length < 6} >Login</button>
            </form>
        </div>
    )
}

export default Login
    