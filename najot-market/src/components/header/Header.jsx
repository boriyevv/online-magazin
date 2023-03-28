import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import { useSelector } from 'react-redux'

import './style.css'

const Header = () => {
    

    const navigate = useNavigate(); 

    const cart = useSelector((s)=>s.cart)
    console.log(cart)

    function handleLogOut (){
        localStorage.removeItem("token")
        navigate("/Login")
        toast("Logged Out", {type: "info"})
    }
    return (
        <header className='text-bg-primary shadow sticky-top py-3'>
            <nav className='container d-flex align-items-center justify-content-between fs-4'>
                <Link to="/" className="logo-responsive text-reset text-decoration-none fs-1">Najot Market</Link>
                <ul className='list-unstyled d-flex align-items-center m-0 gap-3'>
                    <li><Link to="/" className="btnresponsive btn btn-primary fs-4">Home</Link></li>
                    {/* <li><Link to="/" className="btnresponsive btn btn-primary fs-4">Details</Link></li> */}
                    <li><Link to="/" className="btnresponsive btn btn-primary fs-4">About</Link></li>
                    <li><Link to="/" className="btnresponsive btn btn-primary fs-4">Contact</Link></li>
                    <li><Link to="/cart" className="btnresponsive btn btn-primary fs-4">
                        <i className="fa-solid fa-shopping-cart"></i>
                        <span className="badge text-bg-danger ms-2">{cart.items.length}</span>
                        </Link></li>
                    <li><button to="/" className="btnresponsive btn btn-primary fs-4" onClick={handleLogOut}>Log Out <i className='fa-solid fa-arrow-right-from-bracket'></i></button></li>

                </ul>
            </nav>
        </header>
    )
}

export default Header
