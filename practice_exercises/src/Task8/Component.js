import React, { useState } from 'react';
function Component() {
    const [apiData, setApiData] = useState(null);
    const fetchData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setApiData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const handleFetchData = () => {
        fetchData();
    };
    return (
        <div>
            <h2>API Data in Component:</h2>
            {apiData ? (
                <pre>{JSON.stringify(apiData, null, 2)}</pre>
            ) : (
                <p>Loading data...</p>
            )}
            <button onClick={handleFetchData}>Fetch Data</button>
        </div>
    );
}
export default Component;