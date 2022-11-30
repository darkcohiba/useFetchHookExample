import React, { useState, useEffect } from 'react';

function useFetch(url) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

     useEffect(() => {
        setLoading(true);
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch(error => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [url]);

    const refetch = () => {
        setLoading(true);
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch(error => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return { data, loading, error, refetch };
}

export default useFetch;