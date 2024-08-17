import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Navigation/Nav';

const ShehaEventView = () => {
  const [events, setEvents] = useState([]);
  const shehiaId = parseInt(localStorage.getItem('shehiaId'));

  // useEffect(() => {
  //   // Retrieve Sheha's details stored in local storage
  //   const shehaDetails = JSON.parse(localStorage.getItem('shehaDetails'));

  //   if (shehaDetails && shehaDetails.shehiaId) {
  //     setShehiaId(shehaDetails.shehiaId);
  //   }
  // }, []);

  useEffect(() => {
    // Fetch events only when shehiaId is set
    if (shehiaId) {
      axios.get('http://localhost:8080/api/v1/event/all')
        .then((response) => {
          const filteredResponses = response.data.filter(event => event.shehia.shehiaId === shehiaId);
          setEvents(filteredResponses);
          console.log(filteredResponses);
        })
        .catch(error => {
          console.error("There was an error fetching the events!", error);
        });
    }
  }, [shehiaId]); // Added shehiaId as dependency

  return (
    <>
      <Nav />
      <div className="table-container" style={{ marginTop: "116px", marginLeft: "17%" }}>
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
                  <td>
                    <button className='btn2'>Unverify</button>
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