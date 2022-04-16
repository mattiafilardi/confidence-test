import {useEffect, useState} from "react";
import {Location, LocationsRequest} from "../model/Location";

const LIMIT_RESULTS = 3

export default function useLocations(page : number) {
    const [isLoading, setLoading] = useState<boolean>(false)
    const [locations, setLocations] = useState<Location[]>([])
    const [error, setError] = useState<string | null>(null)
    const [totalResults, setTotalResults] = useState<number>(0)

    useEffect(() => {
        if(totalResults >= page * LIMIT_RESULTS)
            fetchLocations()
    }, [page])

    const fetchLocations = () => {
        setLoading(true)
        setError(null)
        const body = { limit: LIMIT_RESULTS, start: page * LIMIT_RESULTS }

        fetch('http://localhost:5000/locations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(response => response.json())
            .then((data: LocationsRequest) => {
                setLocations([...locations, ...data.locations])
                setTotalResults(data.numberOfLocations)
            })
            .catch(error => setError(error.message))
            .finally(() => setLoading(false))
    }

    return {
        isLoading,
        locations,
        error
    };
}
