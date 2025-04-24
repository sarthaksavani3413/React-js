import React, { useState, useEffect } from 'react';

const DataFetchingComponent = () => {

    // **useEffect to fetch data on component mount**
    useEffect(() => {
        // **Define the fetch function**
        fetchData(); // **Call the fetch function**
    }, []); // **Empty dependency array means this useEffect runs only once after the initial render**

    // **Conditional Rendering**
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Data from API</h1>
            <ul>
                {/* **Map through the data and display it** */}
                {data.map(item => (
                    <div>
                        <img src={item.image} alt="" />
                        <li key={item.id}>{item.name}</li>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default DataFetchingComponent;
