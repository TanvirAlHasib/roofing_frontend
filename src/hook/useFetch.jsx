import { useEffect, useState } from 'react'

export default function useFetch(url) {
  
    const [data, setData] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const fetchData = async() => {

            try {

                const res = await fetch(url)
                const resData = await res.json()
                setData(resData)

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
