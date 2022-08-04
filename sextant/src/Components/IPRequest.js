import React, { useEffect, useState } from 'react';

const IPRequest = ({url}) => {

    const [ip, setIp] = useState();

    
    const fetchIp = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setIp(data.ip);
    }

    useEffect(() => {
        fetchIp();
    }, [])


    return (
        <div className='IPAddress'>{ip}</div>
    );
}
export default IPRequest;