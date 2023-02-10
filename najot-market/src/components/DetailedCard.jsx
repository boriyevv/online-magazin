import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const DetailedCard = ({ details }) => {
    // console.log(details)
    
    const [data, setData] = useState([])
    console.log(details)
  
    let {id} = useParams();
    
        // setData(...details)
        // console.log(data)
    

        const [loading, setLoading] = useState(true)
    
    
    useEffect(() => {
        setData(...details)
        console.log(data)
    },[])

    setTimeout((() => {
        setLoading(false)
    },7000))


    return (    
        <> {
                data &&
                <div className="card" aria-hidden="true">
                    <img src={data.image} alt={data.title} className="card-image-top placeholder-card-image" />
                    <div className="card-body">
                        <h5 className="card-title text-truncate">
                            {data.title}
                        </h5>
                        <div className="card-text ">
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="text-danger">${data.price}</span>
                                {/* <span> <i className="fa-solid fa-star text-warning"></i> {data.rating.rate} / {data.rating.count}</span> */}
                            </div>
                            <p className='product-description my-3'>{data.description}</p>
                        </div>
                        <div className="d-flex justify-content-around">
                            <button className="btn btn-success col-5">
                                Buy now
                            </button>
                        </div>
                    </div>
                </div>
        }
            </>   
    )
}

export default DetailedCard
