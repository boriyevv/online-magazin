// import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { toast } from 'react-toastify'
import useDetails from '../hooks/useDetails'
import DetailedCard from './DetailedCard'
// import PlaceholderCards from './PlaceholderCards'

const Details = () => {

    const [details]=useDetails()
    // console.log(details)
    return (
        <div className="container">
            
                <DetailedCard details={details}/>
        
        </div>
    )
}

export default Details