import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Navigation/Nav';

const ShehaEventView = () => {
  const [events, setEvents] = useState([]);
  const [shehiaId, setShehiaId] = useState(null);

  useEffect(() => {
    // Assuming you stored the Sheha's details in local storage upon login
    const shehaDetails = JSON.parse(localStorage.getItem('shehaDetails'));

    if (shehaDetails && shehaDetails.shehiaId) {
      setShehiaId(shehaDetails.shehiaId);
    }
  }, []);

  useEffect(() => {
    // if (shehiaId) {
      axios.get('http://localhost:8080/api/v1/event/all')
        .then((response) => {
          setEvents(response.data);
          console.log(response.data)
        })
        .catch(error => {
          console.error("There was an error fetching the events!", error);
        });
      // }
      // console.log(shehiaId)
  }, []);

  return (
    <>
      <Nav />
      <div className="table-container" style={{marginTop:"116px", marginLeft:"17%"}}>
        <h4>View Events for Shehia {shehiaId}</h4>
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
                <th>Verify</th>
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
                    <Link to={`/verifyevent/${event.event_id}`}>
                      <button className="btn">Verify</button>
                    </Link>
                  </td>
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
