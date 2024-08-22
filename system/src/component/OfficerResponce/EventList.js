import React, { useState, useEffect } from 'react';  // Import useEffect here
import Nav from '../Navigation/Nav';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EventList = () => {
    // Define the events state
    const [events, setEvents] = useState([]);
  

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/event/all')
            .then(response => setEvents(response.data))
            .catch(error => console.error('Error fetching events:', error));
    }, []);

    alert('Event has been updated successfly.');
    // };

    return (
        <>
            <Nav />

        <div className="table-container" style={{ marginTop: "150px" }}>
        <h2>View Event </h2>
        <table className="event-table">
          <thead>
            <tr>
              <th>Event ID</th>
              <th>Event Name</th>
              <th>Event Type</th>
              <th>Event Location</th>
              <th>Shehia Name</th>
              <th>Time Posted</th>
              <th>Image</th>
              <th>Action</th>
              <th>Action</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.event_id}>
                <td>{event.event_id}</td>
                <td>{event.event_name}</td>
                <td>{event.event_type}</td>
                <td>{event.event_location}</td>
                <td>{event.shehia.shehiaName}</td>
                <td>{event.time_posted}</td>
                <td>
                  <img
                    src={`data:image/png;base64,${event.image}`}
                    alt={event.event_name}
                    className="event-image"
                  />
                </td>
                <td>
                  <Link to={`/officer-response/${event.event_id}`} className='btn'>SendResponse</Link>
                </td>
                <td>
                  <button className='btn1' >Delete</button>
                </td>
                <td>{event.status}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
                    </>
    );
};

export default EventList;
