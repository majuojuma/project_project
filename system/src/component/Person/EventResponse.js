import React, { useState, useEffect } from 'react';
import Nav from '../Navigation/Nav';
import axios from 'axios';


const EventResponse = () => {
    const [eventResponses, setEventResponses] = useState([]);

    const userId = parseInt(localStorage.getItem('userId'));


    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/response/all')
            .then(response => {
                // Filter the responses by person userId
                const filteredResponses = response.data.filter(response => response.event.person.userId === userId);
                setEventResponses(filteredResponses);
            })
            .catch(error => console.error('Error fetching responses:', error));
    }, [userId]);
    
    return (
        <>
            <Nav />
            <div className="table-container" style={{ marginTop: "150px" }}>
        <h2>View Response</h2>
        <table className="event-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Event</th>
              <th>Shehia name</th>
              <th>Feedback</th>
              <th>Response date</th>
             
            </tr>
          </thead>
          <tbody>
            {eventResponses.map((event,index) => (
              <tr key={event.id}>
                <td>{index + 1}</td>
                <td>{event.event.event_type}</td>
                <td>{event.event.shehia.shehiaName}</td>
                <td>{event.responseMessage}</td>
                <td>{event.response_Time}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </>
    );
};

export default EventResponse;
