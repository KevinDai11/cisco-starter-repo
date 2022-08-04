import React, {useEffect, useState} from "react";

import {w3cwebsocket as W3CWebSocket} from "websocket";

const client = new W3CWebSocket('ws://localhost:55455');
const WebSocket = () => {

    const [latency, setLatency] = useState();
    const getLatency = async (client) => {
        
        client.onmessage = (message) => {
            setLatency(new Date().getTime() - message.data);
        }
    }

    useEffect(() => {
        getLatency(client);
    })

    return (
        <p>{latency}</p>
    )
}


export default WebSocket;