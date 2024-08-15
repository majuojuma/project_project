import React, { useState } from 'react';
import Nav from '../Navigation/Nav';
import axios from 'axios';

const OfficerResponse = () => {
    const [responseDetails, setResponseDetails] = useState({
        eventId: '',
        officerName: '',
        center: '',
        responseMessage: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setResponseDetails(prevDetails => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/v1/response/send', responseDetails)
            .then(response => {
                console.log('Response sent:', response.data);
                alert('Response has been sent to the user.');
            })
            .catch(error => {
                console.error('Error sending response:', error);
                alert('Failed to send response.');
            });
    };
    return (
        <><Nav />
        <div className="officer-response" style={{marginLeft:"16%", marginTop:"105px"}}>
            <h1>Send Response to User</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Event ID:
                    <input
                        type="text"
                        name="eventId"
                        value={responseDetails.eventId}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Officer Name:
                    <input
                        type="text"
                        name="officerName"
                        value={responseDetails.officerName}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Center:
                    <select
                        name="center"
                        value={responseDetails.center}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Center</option>
                        <option value="Police Station">Police Station</option>
                        <option value="Fire Camp">Fire Camp</option>
                        <option value="KMKM">KMKM</option>
                    </select>
                </label>
                <label>
                    Response Message:
                    <textarea
                        name="responseMessage"
                        value={responseDetails.responseMessage}
                        onChange={handleChange}
                        required
                    ></textarea>
                </label>
                <button type="submit">Send Response</button>
            </form>
        </div>
        </>
    );
};

export default OfficerResponse;
