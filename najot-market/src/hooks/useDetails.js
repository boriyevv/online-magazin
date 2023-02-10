import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"


function useDetails() {


    const [details, setDetails] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        let unmounted = false

        async function getDetails() {
            try {
                setLoading(true)
                let res = await axios.get("/products")
                if (unmounted) return
                if (res.status === 200) {
                    setDetails((op) => [...op, ...res.data])
                }

            } catch (error) {
                toast(error.respoonse.data.error)
            }
            finally{
            setLoading(false)
            }

        }

        getDetails()

        return () => {
            unmounted = true
        }

    }, [])

    return [details]
    
}
// console.log(details)

export default useDetails