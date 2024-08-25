import React, { useState, useEffect } from 'react';
import Nav from '../Navigation/Nav';

const EventUpload = () => {
    const personId = parseInt(localStorage.getItem("userId"));

    const [eventDetails, setEventDetails] = useState({
        eventName: '',
        eventType: '',
        eventLocation: '',
        eventDate: '',
        eventTime: '',
        eventImage: null,
        status:'pending',
        person_id: personId,
        shehiaId: 2, // Added shehaId field
    });

    useEffect(() => {
        setEventDetails(prevDetails => ({ ...prevDetails, person_id: personId }));
    }, [personId]);

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
        formData.append('status', "pending");
        formData.append('person_id', eventDetails.person_id);
        formData.append('shehiaId', eventDetails.shehiaId); // Include shehaId if necessary

        try {
            const response = await fetch('http://localhost:8080/api/v1/event/add', {
                method: 'POST',
                body: formData,
            });

            const responseData = await response.json();
            console.log(responseData); // Log the response

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
    const [shehias, setShehias] = useState([]); // State to store the list of shehias

    useEffect(() => {
      // Fetch the list of shehias from the API
      fetch('http://localhost:8080/api/v1/shehia/all')
        .then(response => response.json())
        .then(data => setShehias(data));
    }, []);

    return (
        <>
            <Nav />
            <div className="event-upload"style={{marginTop:"104px"}}>
                <form onSubmit={handleSubmit}>
                <h1>Register Event On System</h1>
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
                        {/* Event UserId: */}
                        <input
                            type="text"
                            name="userId"
                            value={personId} // Make sure it's the correct user ID
                            readOnly hidden
                        />
                    </label>
                    <label>
            Shehia Name:
            <select
              name="shehiaId"
              value={eventDetails.shehiaId}
              onChange={handleChange}
              required
            >
              <option value="">Select shehia that event happen</option>
              {shehias.map((shehia) => (
                <option key={shehia.shehiaId} value={shehia.shehiaId}>
                  {shehia.shehiaName}
                </option>
              ))}
            </select>
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
