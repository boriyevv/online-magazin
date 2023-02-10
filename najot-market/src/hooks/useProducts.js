import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"


function useProducts(){


    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{

        let unmounted = false

        async function getProducts(){
            try {
                setLoading(true)
                let res = await axios.get("/products")
                if(unmounted) return
                if(res.status === 200){
                    setProducts(res.data)
                }

            } catch (error) {
                toast(error.respoonse.data.error)
            }
            finally{
                setLoading(false)
            }
        
        }

        getProducts()

        return ()=>{
            unmounted = true
        }

    }, [])

    return[products, loading]

}

export default useProducts