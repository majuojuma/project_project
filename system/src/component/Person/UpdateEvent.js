import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Nav from '../Navigation/Nav';

const UpdateEvent = () => {
  const { eventId } = useParams(); // Get eventId from URL
  const navigate = useNavigate();

  const [eventDetails, setEventDetails] = useState({
    eventName: '',
    eventType: '',
    eventLocation: '',
    eventDate: '',
    eventTime: '',
    shehaId: '',
    eventImage: null,
  });

  useEffect(() => {
    axios.get(`http://localhost:8080/api/v1/event/getbyid/${eventId}`)
      .then((response) => {
        const event = response.data;
        setEventDetails({
          eventName: event.event_name,
          eventType: event.event_type,
          eventLocation: event.event_location,
          eventDate: event.time_posted.split(' ')[0], // Extract date
          eventTime: event.time_posted.split(' ')[1], // Extract time
          shehaId: event.shehia.shehiaId,
          eventImage: event.image,
        });
      })
      .catch((error) => {
        console.error("There was an error fetching the event details!", error);
      });
  }, [eventId]);

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
    formData.append('shehaId', eventDetails.shehaId);

    try {
      const response = await axios.put(`http://localhost:8080/api/v1/event/update/${eventId}`, formData);

      if (response.status === 200) {
        alert('Event updated successfully.');
        navigate('/event'); // Navigate back to the events table
      } else {
        alert('Failed to update the event.');
      }
    } catch (error) {
      console.error('Error updating the event:', error);
      alert('An error occurred while updating the event.');
    }
  };

  return (
    <>
      <Nav />
      <div className="event-update">
        <h1>Update Event</h1>
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
            Current Image:
            {eventDetails.eventImage && (
              <img
                src={`data:image/png;base64,${eventDetails.eventImage}`}
                alt="Event"
                style={{ width: '100px', height: '100px' }}
              />
            )}
          </label>
          <label>
            Upload New Image (Optional):
            <input
              type="file"
              name="eventImage"
              accept="image/*"
              onChange={handleImageChange}
            />
          </label>
          <button type="submit">Update Event</button>
        </form>
      </div>
    </>
  );
};

export default UpdateEvent;
