// MyMdxComponent.jsx
import { useEffect, useState } from 'react';

const MyMdxComponent = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('./data.php'); // Ensure this path is correct
            const result = await response.json();
            setData(result);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Data from PHP</h1>
            {data ? (
                <div>
                    <p>{data.message}</p>
                    <p>{data.date}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default MyMdxComponent;
