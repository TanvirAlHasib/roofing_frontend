import { useEffect, useState } from 'react'
import axios from 'axios';

export default function useFetch(url) {

    const [data, setData] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const fetchData = async() => {

            try {

                const res = await axios.get(url, {
                    headers: {
                        Authorization: `bearer ${import.meta.env.VITE_APP_API_TOKEN}`
                    },
                })
                
                // console.log(res.data.data);
                setData(res.data.data)

            } catch (error) {

                setError(error)

            } finally{

                setLoading(false)

            }

        }

        fetchData()

    },[url])


    return [data, error, loading]

}