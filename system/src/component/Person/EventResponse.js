import React, { useState, useEffect } from 'react';
import Nav from '../Navigation/Nav';
import axios from 'axios';

const EventResponse = () => {
    const [eventResponses, setEventResponses] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/response/all')
            .then(response => setEventResponses(response.data))
            .catch(error => console.error('Error fetching responses:', error));
    }, []);
    
    return (
        <>
            <Nav />
            <div className="event-response" style={{marginLeft:"17%", textDecoration:"center"}}>
                <h1>Event Responses</h1>
                <div className="response-list">
                    {eventResponses.map(response => (
                        <div key={response.eventId} className="response-item">
                            <h2>{response.eventName}</h2>
                            <p><strong>Station:</strong> {response.station}</p>
                            <p><strong>Status:</strong> {response.status}</p>
                            <p><strong>Estimated Time:</strong> {response.estimatedTime}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default EventResponse;
