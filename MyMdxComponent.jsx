// MyMdxComponent.jsx
import { useEffect, useState } from 'react';

const MyMdxComponent = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://beff.info/data.php'); // Update this URL
            if (!response.ok) {
                console.error('Error fetching data:', response.statusText);
                return;
            }
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
