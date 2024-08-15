// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import Nav from '../Navigation/Nav';

// const VerifyEvent = () => {
//   const { eventId } = useParams();
//   const [eventDetails, setEventDetails] = useState({});
//   const [description, setDescription] = useState('');
//   const navigate = useNavigate();  // useNavigate instead of useHistory

//   useEffect(() => {
//     axios.get(`http://localhost:8080/api/v1/event/getbyid/${eventId}`)
//       .then((response) => {
//         setEventDetails(response.data);
//       })
//       .catch(error => {
//         console.error("There was an error fetching the event details!", error);
//       });
//   }, [eventId]);

//   const handleVerification = () => {
//     axios.post(`http://localhost:8080/api/v1/sheha/verify/${eventId}`, { description })
//       .then(() => {
//         alert('Event has been verified and the officer has been notified.');
//         navigate('/eventview'); // Use navigate instead of history.push
//       })
//       .catch((error) => {
//         console.error("There was an error verifying the event!", error);
//       });
//   };

//   return (
//     <>
//       <Nav />
//       <div className="verify-event" style={{marginLeft:"17%",marginTop:"117px"}}>
//         <h1>Verify Event</h1>
//         {eventDetails ? (
//           <div>
//             <p><strong>Event Name:</strong> {eventDetails.event_name}</p>
//             <p><strong>Event Location:</strong> {eventDetails.event_location}</p>
            
//             <label>
//               Event Description:
//               <textarea
//                 name="description"
//                 value={description}
//                 placeholder='comment about this event'
//                 onChange={(e) => setDescription(e.target.value)}
//                 required
//               />
//             </label>
//             <button className='btn' onClick={handleVerification}>Verify Event</button>
//           </div>
//         ) : (
//           <p>Loading event details...</p>
//         )}
//       </div>
//     </>
//   );
// };

// export default VerifyEvent;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Nav from '../Navigation/Nav';

const VerifyEvent = () => {
  const { eventId } = useParams();
  const [eventDetails, setEventDetails] = useState({});
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();  // useNavigate instead of useHistory

  useEffect(() => {
    axios.get(`http://localhost:8080/api/v1/event/getbyid/${eventId}`)
      .then((response) => {
        setEventDetails(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the event details!", error);
      });
  }, [eventId]);

  const handleVerification = () => {
    axios.post(`http://localhost:8080/api/v1/sheha/verify/${eventId}`, { description })
      .then((response) => {
        setMessage('Event has been verified and notifications sent.');
        setTimeout(() => {
          navigate('/eventview'); // Use navigate instead of history.push
        }, 2000); // Navigate after 2 seconds
      })
      .catch((error) => {
        setMessage('Error verifying event: ' + error.response.data);
      });
  };

  return (
    <>
      <Nav />
      <div className="verify-event" style={{ marginLeft: "17%", marginTop: "117px" }}>
        <h1>Verify Event</h1>
        {eventDetails ? (
          <div>
            <p><strong>Event Name:</strong> {eventDetails.event_name}</p>
            <p><strong>Event Location:</strong> {eventDetails.event_location}</p>
            
            <label>
              Event Description:
              <textarea
                name="description"
                value={description}
                placeholder='Comment about this event'
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </label>
            <button className='btn' onClick={handleVerification}>Verify Event</button>
            {message && <p>{message}</p>}
          </div>
        ) : (
          <p>Loading event details...</p>
        )}
      </div>
    </>
  );
};

export default VerifyEvent;

