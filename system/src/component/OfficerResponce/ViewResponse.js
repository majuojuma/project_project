import React, { useState, useEffect } from 'react';
import Nav from '../Navigation/Nav';
// import './ViewResponse.css'; // add a separate CSS file for styling

const ViewResponse = () => {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/v1/response/all');
        const data = await response.json();
        setResponseData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <> <Nav />
    <div className="view-response-container">
      <h1>Response Data</h1>
      {responseData ? (
        <div className="response-data-grid">
          {responseData.map((item) => (
            <div key={item.id} className="row">
              <div className="event-column">
                <h2>{item.event.event_name}</h2>
                <p>Location: {item.event.event_location}</p>
                <p>Time posted: {item.event.time_posted}</p>
                <p>Event type: {item.event.event_type}</p>
              </div>
              <div className="separator"></div>
              <div className="response-column">
                <h2>Response from {item.officer.name}</h2>
                <p>{item.responseMessage}</p>
                <p>Response time: {item.response_Time}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="loading-message">Loading data...</p>
      )}
    </div>
    </>
  );
};

export default ViewResponse;