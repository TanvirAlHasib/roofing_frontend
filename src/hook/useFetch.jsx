import { useEffect, useState } from 'react'

export default function useFetch(url) {
  
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const fetchData = async() => {

            try {

                fetch(url)
                .then(res => res.json())
                .then(data => setData(data))

            } catch (error) {

                setError(error)

            } finally{

                setLoading(false)

            }

        }

        fetchData()

    },[url])


    return {data, error, loading}

}
