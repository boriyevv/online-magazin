
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Detail from "../components/Detail"
import Header from "../components/Header";
// import Products from "../components/Products";

const Details = () => {
    const navigate = useNavigate()
    useEffect(() => {
        let token = localStorage.getItem("token")
        if(!token) navigate("/Login")
    },[])

        return (
            <>
                <Header />
                <Detail/>
                {/* <h1>ok</h1> */}
            </>
        )

    }

    export default Details
