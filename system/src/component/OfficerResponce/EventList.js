import React, { useState, useEffect } from 'react';  // Import useEffect here
import Nav from '../Navigation/Nav';
import axios from 'axios';

const EventList = () => {
    // Define the events state
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/event/all')
            .then(response => setEvents(response.data))
            .catch(error => console.error('Error fetching events:', error));
    }, []);

    const handleEventClick = (event) => {
        setSelectedEvent(event);
    };

    const handleUpdateEvent = () => {
        // Handle update event logic here
        alert('Event has been updated successfly.');
    };

    return (
        <>
            <Nav />
            <div className="event-list" style={{marginTop:"103px"}}>
                <h1>Uploaded Events</h1>
                <div className="events">
                    {events.map(event => (
                        <div key={event.id} className="event-item" onClick={() => handleEventClick(event)}>
                            <h2>{event.eventName}</h2>
                            <p>{event.eventLocation}</p>
                        </div>
                    ))}
                </div>
                {selectedEvent && (
                    <div className="event-details">
                        <h2>{selectedEvent.eventName}</h2>
                        <p><strong>Type:</strong> {selectedEvent.eventType}</p>
                        <p><strong>Location:</strong> {selectedEvent.eventLocation}</p>
                        <p><strong>Date:</strong> {selectedEvent.eventDate}</p>
                        <p><strong>Time:</strong> {selectedEvent.eventTime}</p>
                        <img src={selectedEvent.eventImage} alt={selectedEvent.eventName} />
                        <button onClick={handleUpdateEvent}>Update Event</button>
                    </div>
                )}
            </div>
        </>
    );
};

export default EventList;
