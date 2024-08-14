import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from '../component/Navigation/Nav';
import { useNavigate } from 'react-router-dom';

const EventTable = () => {
  const personId = parseInt(localStorage.getItem('userId'));
  const navigate = useNavigate();

  const [events, setEvent] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/event/all")
      .then((response) => {
        const filterEventByUserId = response.data.filter(item => item.person.userId === personId);
        setEvent(filterEventByUserId);
      })
  }, [personId]);

  const handleDelete = (eventId) => {
    if (window.confirm('Are You Sure you Want to Delete')) {
      axios.delete(`http://localhost:8080/api/v1/event/delete/${eventId}`)
        .then((response) => {
          // Remove the deleted event from the state
          setEvent(events.filter(event => event.event_id !== eventId));
        })
        .catch((error) => {
          console.error("There was an error deleting the event!", error);
        });
    }
  };

  const handleUpdate = (eventId) => {
    navigate(`/update-event/${eventId}`);
  };

  return (
    <>
      <Nav />
      <div className="table-container" style={{ marginTop: "150px" }}>
        <h2>View Event {personId}</h2>
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
                  <button className='btn' onClick={() => handleUpdate(event.event_id)}>Update</button>
                </td>
                <td>
                  <button className='btn1' onClick={() => handleDelete(event.event_id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EventTable;
