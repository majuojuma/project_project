import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Navigation/Nav';

const ShehaEventView = () => {
  const [events, setEvents] = useState([]);
  const shehiaId = parseInt(localStorage.getItem('shehiaId'));

  useEffect(() => {
    if (shehiaId) {
      axios.get('http://localhost:8080/api/v1/event/all')
        .then((response) => {
          const filteredResponses = response.data.filter(event => event.shehia.shehiaId === shehiaId);
          setEvents(filteredResponses);
        })
        .catch(error => {
          console.error("There was an error fetching the events!", error);
        });
    }
  }, [shehiaId]);

  useEffect(() => {
    // Refresh the page when events state changes
    if (events.length > 0) {
      axios.get('http://localhost:8080/api/v1/event/all')
        .then((response) => {
          const filteredResponses = response.data.filter(event => event.shehia.shehiaId === shehiaId);
          setEvents(filteredResponses);
        })
        .catch(error => {
          console.error("There was an error fetching the events!", error);
        });
    }
  }, [events]);

  const handleApprove = (eventId) => {
    axios.patch(`http://localhost:8080/api/v1/event/${eventId}/proved`)
      .then((response) => {
        // Update the events state to trigger the refresh
        setEvents(events.map(event => event.event_id === eventId ? { ...event, status: 'approved' } : event));
      })
      .catch(error => {
        console.error(error);
      });
  };
  const handleunapprove = (eventId) => {
    axios.patch(`http://localhost:8080/api/v1/event/${eventId}/unapprove`)
      .then((response) => {
        // Update the events state to trigger the refresh
        setEvents(events.map(event => event.event_id === eventId ? { ...event, status: 'unapproved' } : event));
      })
      .catch(error => {
        console.error(error);
      });
  };


  return (
    <>
      <Nav />
      <div className="table-container" style={{ marginTop: "116px", marginLeft: "17%" }}>
        <h4>View Events for Shehia </h4>
        {events.length > 0 ? (
          <table className="event-table">
            <thead>
              <tr>
                <th>Event ID</th>
                <th>Event Name</th>
                <th>Event Type</th>
                <th>Event Location</th>
                <th>Time Posted</th>
                <th>Image</th>
                <th>Approve</th>
                <th>Unapprove</th>
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
                  <td>{event.time_posted}</td>
                  <td>
                    <img
                      src={`data:image/png;base64,${event.image}`}
                      alt={event.event_name}
                      className="event-image"
                    />
                  </td>
                  <td>
                    <button className='btn' onClick={() => handleApprove(event.event_id)}>Approve</button>
                  </td>
                  <td>
                    <button className='btn1' onClick={()=> handleunapprove(event.event_id)}>Unapprove</button> 
                  </td>
                  <td>{event.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No events found for your Shehia.</p>
        )}
      </div>
    </>
  );
};

export default ShehaEventView;