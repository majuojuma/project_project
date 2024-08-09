import React, { useState, useEffect } from 'react';
import Nav from '../Navigation/Nav';

const EventResponse = () => {
    const [eventResponses] = useState([
        {
            eventId: 1,
            eventName: 'Fire at Market',
            station: 'Fire Camp',
            status: 'Being Handled',
            estimatedTime: '30 minutes',
        },
        {
            eventId: 2,
            eventName: 'Burglary at Shop',
            station: 'Police Station',
            status: 'Will be Handled Soon',
            estimatedTime: '1 hour',
        },
        {
            eventId: 3,
            eventName: 'Boat Capsized',
            station: 'KMKM',
            status: 'Being Handled',
            estimatedTime: '15 minutes',
        },
    ]);

    useEffect(() => {
        // Fetch event responses from the server or API here
        // For example: fetchEventResponses().then(data => setEventResponses(data));
    }, []);

    return (
        <><Nav />
        <div className="event-response">
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
