import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Nav from '../component/Navigation/Nav';


const EventTable = () => {

    const [events, setEvent]  = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8080/api/v1/event/all")
        .then((response)=>{
            setEvent(response.data)
        })
    })
  return (
    <> <Nav/>
    <div className="table-container">
    <h4>View Event</h4>
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
                <button className='btn'>delete</button>
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
