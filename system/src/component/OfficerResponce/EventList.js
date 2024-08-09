import React, { useState } from 'react'; 
import Nav from '../Navigation/Nav';

const EventList = () => {
    const [events] = useState([
        {
            id: 1,
            eventName: 'Fire at Market',
            eventType: 'Tukio la Moto',
            eventLocation: 'Market Street',
            eventDate: '2024-07-10',
            eventTime: '14:30',
            eventImage: 'fire.jpg',
        },
        {
            id: 2,
            eventName: 'Burglary at Shop',
            eventType: 'Tukio la Uhalifu',
            eventLocation: 'Shop Street',
            eventDate: '2024-07-09',
            eventTime: '02:00',
            eventImage: 'burglary.jpg',
        },
    ]);

    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleEventClick = (event) => {
        setSelectedEvent(event);
    };

    const handleUpdateEvent = () => {
        // Handle update event logic here
        alert('Event has been updated.');
    };

    return (
        <><Nav />
        <div className="event-list">
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
