import React, { useState, useEffect } from 'react';
import Nav from '../Navigation/Nav';

const EventUpload = () => {
    const personId = parseInt(localStorage.getItem("userId"))

    const [eventDetails, setEventDetails] = useState({
        eventName: '',
        eventType: '',
        eventLocation: '',
        eventDate: '',
        eventTime: '',
        eventImage: null,
        userId: personId,
    });

    useEffect(() => {
        setEventDetails(prevDetails => ({ ...prevDetails, userId: personId }));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventDetails(prevDetails => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        setEventDetails(prevDetails => ({
            ...prevDetails,
            eventImage: e.target.files[0],
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('event_name', eventDetails.eventName);
        formData.append('event_type', eventDetails.eventType);
        formData.append('event_location', eventDetails.eventLocation);
        formData.append('time_posted', `${eventDetails.eventDate} ${eventDetails.eventTime}`);
        formData.append('image', eventDetails.eventImage);
        formData.append('userId', personId);

        try {
            const response = await fetch('http://localhost:8080/api/v1/event/add', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                alert('Event has been submitted successfully.');
            } else {
                alert('Failed to submit the event.');
            }
        } catch (error) {
            console.error('Error submitting the event:', error);
            alert('An error occurred while submitting the event.');
        }
    };

    return (
        <>
            <Nav />
            <div className="event-upload">
                <h1>Submit Event On System</h1>
                <form onSubmit={handleSubmit}>
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
                        Type of Event:
                        <select
                            name="eventType"
                            value={eventDetails.eventType}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Event Type</option>
                            <option value="tukio la moto">Tukio la Moto</option>
                            <option value="tukio la magendo">Tukio la Magendo</option>
                            <option value="tukio la uhalifu">Tukio la Uhalifu</option>
                        </select>
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
                        Event Time:
                        <input
                            type="time"
                            name="eventTime"
                            value={eventDetails.eventTime}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Event Image:
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            required
                        />
                    </label>
                    <button type="submit">Submit Event</button>
                </form>
            </div>
        </>
    );
};

export default EventUpload;