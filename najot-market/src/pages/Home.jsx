import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Products from "../components/Products";

const Home = () => {
    const navigate = useNavigate()
    useEffect(() => {
        let token = localStorage.getItem("token")
        if(!token) navigate("/Login")
    },[])

        return (
            <>
                <Header />
                <Products/>
                {/* <h1>ok</h1> */}
            </>
        )

    }

export default Home