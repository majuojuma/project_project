import React, { useState } from 'react';
import Nav from '../Navigation/Nav';

const EventVerification = () => {
    const [eventDetails, setEventDetails] = useState({
        eventName: '',
        eventLocation: '',
        eventDate: '',
        eventDescription: '',
        isVerified: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventDetails(prevDetails => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleVerification = (e) => {
        e.preventDefault();
        setEventDetails(prevDetails => ({
            ...prevDetails,
            isVerified: true,
        }));
        alert('Event has been verified.');
    };

    return (
      <><Nav />
        <div className="event-verification">
            <h1>Verify Event</h1>
            <form onSubmit={handleVerification}>
                <label>
                    Event Name:
                    <input
                        type="text"
                        name="eventName"
                        value={eventDetails.eventName}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Event Location:
                    <input
                        type="text"
                        name="eventLocation"
                        value={eventDetails.eventLocation}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Event Date:
                    <input
                        type="date"
                        name="eventDate"
                        value={eventDetails.eventDate}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Event Description:
                    <textarea
                        name="eventDescription"
                        value={eventDetails.eventDescription}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">Verify Event</button>
            </form>
            {eventDetails.isVerified && <p className="verified-message">This event has been verified.</p>}
        </div>
        </>
    );
};

export default EventVerification;
